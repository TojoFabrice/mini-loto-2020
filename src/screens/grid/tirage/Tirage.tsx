import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { AdMobInterstitial } from "expo-ads-admob";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Colors, paddingWidth, spaceWidth } from "../../../styles";
import PlayedTirage from "./PlayedTirage";
import Share from "../../Share";
import Divider from "../../../components/Divider";
import { fonts } from "../../../styles/fonts";
import { sixRandomArray, getArray } from "../../../services/Utils";
import AnimatedTirage from "./AnimatedTirage";
import { useNavigation } from "@react-navigation/native";

export default function Tirage() {
  const { navigate } = useNavigation();
  const total = getArray(24);
  const [selected, setSelected] = React.useState(getArray(6, 0));
  const interstitial =
    Platform.OS === "ios"
      ? "ca-app-pub-1126531054125229/7455480978"
      : "ca-app-pub-1126531054125229/9618318301";
  const showAdd = async () => {
    await AdMobInterstitial.setAdUnitID(interstitial);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };
  const data = [
    {
      name: "Numéro fétiche",
    },
    {
      name: "Aléatoire",
      onPress: () => {
        setSelected(sixRandomArray(6));
      },
    },
    {
      name: "Valider la grille",
      onPress: async () => {
        await showAdd();
      },
    },
  ];

  const choose = (
    number: number,
    after: (s: any[]) => any = () => {}
  ) => () => {
    const forSelected = selected.slice();
    const i = forSelected.indexOf(number);
    const y = selected.indexOf(0);

    if (i !== -1) forSelected[i] = 0;
    else if (y !== -1) forSelected[y] = number;

    setSelected(forSelected);
    after(forSelected);
  };

  return (
    <>
      <View>
        <View style={tirageHeaderStyles.header}>
          <Text
            style={tirageHeaderStyles.headerTitle}
            children="Tirage N° 134"
          />
          <Divider
            before={
              <Text style={tirageHeaderStyles.text} children="du 23/06/20" />
            }
            after={<Text style={tirageHeaderStyles.text} children="à 10h57" />}
            color={Colors.grey}
          />
        </View>
        <View style={tirageHeaderStyles.buttonContainer}>
          {data.map((d, k) => (
            <View
              key={k}
              style={{
                ...tirageHeaderStyles.button,
                ...tirageHeaderStyles[`button${k}`],
              }}
            >
              <TouchableOpacity onPress={d.onPress}>
                <Text
                  style={{
                    ...tirageHeaderStyles.buttonText,
                    ...tirageHeaderStyles[`buttonText${k}`],
                  }}
                >
                  {d.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <Share grid={false} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Il vous reste 2 grilles sur ce tirage</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          ...paddingWidth,
        }}
      >
        <Text style={styles.text}>
          Le tirage{" "}
          <Text
            style={{ color: Colors.yellow, fontFamily: fonts.poppins.SemiBold }}
          >
            Jour +1
          </Text>
        </Text>
        <TouchableOpacity onPress={() => navigate("Grilles")}>
          <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
            Voir le tirage
        </Text>
        </TouchableOpacity>
      </View>
      <AnimatedTirage
        total={total}
        selected={selected}
        styles={styles}
        choose={choose}
        showAdd={showAdd}
      />
      <PlayedTirage />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    borderColor: Colors.blueLight,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    ...paddingWidth,
    marginTop: 30,
  },
  title: {
    color: Colors.yellow,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.poppins.Medium,
  },
  text: {
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  tirageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginRight: spaceWidth,
    marginLeft: spaceWidth,
    marginBottom: 30,
    paddingTop: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.blueLight,
  },
  button: {
    alignSelf: "flex-start",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 60,
    height: 60,
    borderRadius: 60,
    marginBottom: 15,
  },
  buttonSelected: {
    backgroundColor: Colors.blueDark,
  },
  buttonText: {
    color: Colors.blueLight,
    textAlign: "center",
    fontSize: 20,
    fontFamily: fonts.poppins.bold,
  },
  buttonTextSelected: {
    color: Colors.white,
  },
  validate: {
    backgroundColor: Colors.yellow,
    padding: 12,
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 50,
  },
  validateText: {
    color: Colors.black,
    textAlign: "center",
    fontFamily: fonts.poppins.regular,
  },
});

const tirageHeaderStyles: any = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: Colors.blueLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    color: Colors.yellow,
    fontFamily: fonts.poppins.regular,
  },
  headerTitle: {
    color: Colors.yellow,
    fontWeight: "800",
    fontSize: 16,
    fontFamily: fonts.poppins.bold,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 10,
    paddingTop: 12,
    width: "100%",
    marginBottom: 15,
    borderRadius: 50,
    borderColor: Colors.white,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    width: "100%",
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  button2: {
    backgroundColor: Colors.yellow,
    marginBottom: 0,
    borderWidth: 0,
  },
  buttonText2: {
    color: Colors.black,
  },
  button0: {
    width: "49%",
  },
  button1: {
    width: "49%",
  },
});
