import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Divider from "../components/Divider";
import { Colors } from "../styles";
import BackgroundTime from "../components/BackgroundTime";
import Logo from "../components/logo/Logo";
import { images } from "../styles/Image";
import { fonts } from "../styles/fonts";
import { Icon } from "react-native-elements";
import { getDate, getTime } from "../services/time";
import { useNextLottery } from "../hooks/useLottery";

export default function Header({
  grid = true,
  showDrawer,
  title = "",
  headerMode = false,
}: any) {
  const { navigate, goBack } = useNavigation();
  const nextLotteryDraw = useNextLottery();

  return (
    <ImageBackground
      width={200}
      style={{ flex: 1, backgroundColor: Colors.blueDark, padding: 20 }}
      source={images.bgheader}
      resizeMode="cover"
    >
      {headerMode && (
        <View style={styles.headerMode}>
          <TouchableOpacity onPress={goBack} style={styles.headerModeIcon}>
            <Icon name="arrow-back" color={Colors.white} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={styles.headerModeTitle}>{title}</Text>
          </View>
          <Logo />
        </View>
      )}
      <View style={styles.container}>
        {nextLotteryDraw.loading || !nextLotteryDraw.lottery ? (
          <View style={styles.textContainer} />
        ) : (
          <View style={styles.textContainer}>
            <Text style={{ ...styles.text, ...styles.title }}>
              Tirage N° {nextLotteryDraw.lottery.id}
            </Text>
            <Divider
              before={
                <Text
                  style={{ ...styles.text, color: Colors.yellowDark }}
                  children={getDate(nextLotteryDraw.lottery.drawnAt)}
                />
              }
              after={
                <Text
                  style={{ ...styles.text, color: Colors.yellowDark }}
                  children={`à ${getTime(nextLotteryDraw.lottery.drawnAt)}`}
                />
              }
              color={Colors.grey}
            />
            <Text style={{ ...styles.text, ...styles.description }}>
              Prochain Tirage dans
            </Text>
          </View>
        )}
        {headerMode ? (
          <TouchableOpacity onPress={showDrawer}>
            <Image source={images.Menu} style={{ marginRight: 27 }} />
          </TouchableOpacity>
        ) : (
          <Logo />
        )}
      </View>
      <View style={styles.timeContainer}>
        <View style={{ paddingTop: 25 }}>
          <BackgroundTime />
        </View>
        {!headerMode && (
          <TouchableOpacity onPress={showDrawer}>
            <Image source={images.Menu} style={{ marginRight: 27 }} />
          </TouchableOpacity>
        )}
      </View>
      {grid && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("Grid")}
          >
            <Text
              style={{
                ...styles.text,
                color: Colors.black,
                fontSize: 16,
              }}
            >
              Aller sur la grille
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ ...styles.text, ...styles.footerTitle }}>
              Choisissez 6 numéros
            </Text>
            <Text style={{ ...styles.text }}>de 1 à 24</Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    color: Colors.yellow,
    fontFamily: fonts.poppins.regular,
  },
  title: {
    fontSize: 20,
    marginBottom: 3,
    fontFamily: fonts.poppins.bold,
  },
  description: {
    fontSize: 17,
    marginTop: 3,
    fontFamily: fonts.poppins.Medium,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    backgroundColor: Colors.yellow,
  },
  footerTitle: {
    color: Colors.white,
    fontFamily: fonts.poppins.SemiBold,
  },
  headerMode: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  headerModeIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  headerModeTitle: {
    fontFamily: fonts.poppins.bold,
    fontSize: 18,
    color: Colors.yellow,
    textAlign: "right",
    marginRight: 40,
  },
});
