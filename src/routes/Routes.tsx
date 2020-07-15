import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import JwtDecode from "jwt-decode";

import ForgotPassword from "../screens/auth/forgotPassword";
import ResetPassword from "../screens/auth/resetPassword";
import onEnterHomeLotteryDraws from "../services/store/actions/LotteryDrawService";
import onEnterHomeUserPlays from "../services/store/actions/UserPlaysService";
import Logo from "../components/logo/Logo";
import store from "../store";
import Auth from "../screens/auth/Auth";
import { database_query } from "../services/database";
import {
  setCurrentUserState,
  setRefreshTokenState,
} from "../store/actions/Account";
import Home from "../screens/home/Home";
import Grid from "../screens/grid/Grid";
import NextLotteryDraw from "../screens/lotterydraw/nextLotteryDraw/NextLotteryDraw";
import LotteryDrawResult from "../screens/lotterydraw/lotteryDrawResult/LotteryDrawResult";
import LotteryDrawLive from "../screens/lotterydraw/lotteryDrawLive/LotteryDrawLive";
import Grilles from "../screens/grille/Grilles";
import Parrainage from "../screens/grid/parrainage";
import myEarnings from "../screens/myearnings/MyEarnings";

const Stack = createStackNavigator();

export default function Routes() {
  const token = useSelector((state: any) => state.Account.token);
  const currentUser = useSelector((state: any) => state.Account.currentUser);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const validToken = ((): boolean => {
    let valid = false;

    if (token && token !== "") {
      const { exp } = JwtDecode(token);
      valid = exp * 1000 > new Date().getTime();
    }

    return valid && currentUser;
  })();

  React.useEffect(() => {
    database_query(["token", "currentUser", "refresh_token"]).then((data) => {
      dispatch({
        type: "SET_TOKEN",
        token: data.token === "" ? null : data.token,
      });
      if (data.currentUser) dispatch(setCurrentUserState(data.currentUser));
      if (data.refresh_token)
        dispatch(setRefreshTokenState(data.refresh_token));

      setLoading(false);
    });
  }, []);

  return loading ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo />
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {validToken ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              listeners={{
                focus: async () => {
                  await onEnterHomeLotteryDraws(store);
                  await onEnterHomeUserPlays(store);
                },
              }}
            />
            <Stack.Screen name="Grid" component={Grid} />
            <Stack.Screen name="NextLotteryDraw" component={NextLotteryDraw} />
            <Stack.Screen
              name="Resultat"
              component={LotteryDrawResult}
            />
            <Stack.Screen name="Test" component={Grid} />
            <Stack.Screen name="Parrainage" component={Parrainage} />
            <Stack.Screen name="TirageLive" component={LotteryDrawLive} />
            <Stack.Screen name="Grilles" component={Grilles} />
            <Stack.Screen name="myEarnings" component={myEarnings} />
          </>
        ) : (
          <>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
