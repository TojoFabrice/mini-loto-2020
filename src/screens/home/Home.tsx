import React, { useEffect, useState } from "react";
import { View, Platform, Dimensions } from "react-native";
import { AdMobInterstitial } from "expo-ads-admob";
import { connect } from "react-redux";
import Modal from "react-native-modal";

import { getCurrentUser } from "../../services/store/reducers/AccountsReducerService";
import {
  getUserPlays,
  getCurrentUserPlay,
} from "../../services/store/reducers/UserPlayReducerService";
import { getCurrentLotteryDraw } from "../../services/store/reducers/LotteryDrawReducerService";
import { getFourLastUserPlays } from "../../controllers/UserPlayController";
import { getLastUserPlays } from "../../services/store/reducers/UserPlayReducerService";
import MiniLottoBackground from "../../components/miniLottoBackground";
import Header from "../Header";
import HomeUser from "./HomeUser";
import MomentGain from "./MomentGain";
import Share from "../Share";
import HomeActivity from "./HomeTab/HomeActivity";
import Drawer from "../../components/navigation/drawer";

const Home = ({
  userPlaysState,
  currentUser,
  currentLotteryDraw,
  currentUserPlay,
  lastUserPlaysState,
}: any) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const deviceWidth = Dimensions.get("window").width;

  useEffect(() => {
    getFourLastUserPlays(userPlaysState, currentUser, currentLotteryDraw);
    if (currentLotteryDraw.drawnAt) {
      let date = new Date();
      date.setMinutes(date.getMinutes() + 7);
    }
  }, [currentUser, userPlaysState, currentUserPlay, currentLotteryDraw]);

  return (
    <MiniLottoBackground height={325}>
      <Header showDrawer={() => setShowDrawer(true)} />
      <HomeUser />
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <MomentGain />
      </View>
      <Share />
      <HomeActivity />
      <Modal
        animationIn={"slideInRight"}
        animationOut={"slideOutRight"}
        isVisible={showDrawer}
        style={{ flex: 1, margin: 0 }}
      >
        <Drawer setShowDrawer={() => setShowDrawer(false)} />
      </Modal>
    </MiniLottoBackground>
  );
};
const stateToProps = (state: any) => {
  return {
    currentUser: getCurrentUser(state),
    userPlaysState: getUserPlays(state),
    currentLotteryDraw: getCurrentLotteryDraw(state),
    currentUserPlay: getCurrentUserPlay(state),
    lastUserPlaysState: getLastUserPlays(state),
  };
};

const actionToProps = {};

export default connect(stateToProps, actionToProps)(Home);
