import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Alert,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

import {
  setTokenState,
  setLoggedState,
  setLoadingState,
} from "../../../store/actions/Account";
import DrawerStyles from "./DrawerStyles";
import { images } from "../../../styles/Image";
import { Link, useRoute, useNavigation } from "@react-navigation/native";
import { User } from "../../../Types/User";
import { Icon } from "react-native-elements";
import { Colors } from "../../../styles";
import { ScreenDimensions, MainStyle } from "../../../styles/Css";
import { database_store } from "../../../services/database";
import { drawerTags } from "../../../common/DrawerTags";

export default function Slider({ setShowDrawer }: any) {
  const currentUser: User = useSelector(
    (state: any) => state.Account.currentUser
  );
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const currentRoute = route.name;

  const onLogout = React.useCallback(() => {
    Alert.alert(
      "Information",
      "Êtes-vous sûr de vouloir quitter cette application ?",
      [
        {
          text: "Oui",
          onPress: () => {
            database_store({
              token: "",
              currentUser: null,
              refresh_token: "",
              nextLottery: null,
            }).then(() => {
              setTokenState("")(dispatch);
              setLoadingState(false)(dispatch);
              setLoggedState(false)(dispatch);
            });
          },
        },
        {
          text: "Non",
        },
      ]
    );
  }, []);

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode={"stretch"}
      source={images.auth.background}
    >
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode={"cover"}
        source={images.drawer.bubble}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {Object.keys(currentUser).length > 0 && (
            <View style={DrawerStyles.header}>
              <View>
                <Image
                  source={images.profile}
                  style={DrawerStyles.profilepic}
                  borderRadius={(ScreenDimensions.widthScreen * 0.2) / 2}
                />
                <UserStatus />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  children={`${currentUser.firstName} ${currentUser.lastName}`}
                  style={{ ...DrawerStyles.text }}
                />
                <TouchableOpacity onPress={onLogout}>
                  <Text
                    style={{ ...DrawerStyles.text, ...DrawerStyles.logout }}
                  >
                    Déconnexion
                  </Text>
                </TouchableOpacity>
              </View>
              <Icon
                name="close"
                type="material"
                size={30}
                color={Colors.white}
                onPress={setShowDrawer}
                containerStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  borderRadius: 40 / 2,
                  padding: 5,
                }}
              />
            </View>
          )}
          <ScrollView style={DrawerStyles.menuContainer}>
            {drawerTags.map((menu, k) => {
              const activeColor =
                currentRoute === menu.to
                  ? { borderLeftColor: Colors.yellow }
                  : {};
              const marginIcon =
                currentRoute === menu.to ? { marginLeft: 10 } : {};
              const activeBaground =
                currentRoute === menu.to
                  ? { backgroundColor: Colors.greyTrans }
                  : {};
              const activeLink =
                currentRoute === menu.to ? { color: Colors.yellow } : {};
              return (
                <TouchableOpacity
                  key={k}
                  style={{
                    ...DrawerStyles.menu,
                    ...activeColor,
                    ...activeBaground,
                    ...(k === 0 ? DrawerStyles.menuFirstChild : {}),
                  }}
                  onPress={() => {
                    navigate(menu.to);
                    setShowDrawer();
                  }}
                >
                  <View
                    style={{
                      ...MainStyle.flexRow,
                      alignItems: "center",
                    }}
                  >
                    {currentRoute === menu.to && (
                      <Icon
                        color={Colors.yellow}
                        name={menu.icon}
                        style={marginIcon}
                      />
                    )}
                    <Text
                      style={{
                        ...DrawerStyles.text,
                        ...DrawerStyles.menuLink,
                        ...activeLink,
                      }}
                    >
                      {menu.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </ImageBackground>
  );
}

function UserStatus() {
  return (
    <View
      style={{
        backgroundColor: Colors.green,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: Colors.blueLight,
        position: "absolute",
        bottom: 10,
        right: 20,
      }}
    />
  );
}
