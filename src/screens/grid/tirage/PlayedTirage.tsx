import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Colors, spaceWidth } from "../../../styles";
import Sup from "../../../components/Sup";
import { images } from "../../../styles/Image";
import { fonts } from "../../../styles/fonts";

export default function PlayedTirage() {
  const data = [fakeData(), fakeData(), fakeData(), fakeData()];

  return (
    <View style={styles.container}>
      <Text
        style={styles.bigTitle}
        children="Vos grilles jouées sur ce tirage"
      />
      {data.map((selected, key) => (
        <View key={key}>
          <Sup
            style={{ ...styles.text, ...styles.title }}
            text={`Votre ${key + 1}`}
            sup={key + 1 === 1 ? "ére " : "éme "}
            after="grille sur ce tirage"
          />
          <ShowTirage selected={selected} />
        </View>
      ))}
    </View>
  );
}

interface ShowTirageProps {
  selected: number[];
}

export function ShowTirage({ selected }: ShowTirageProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      {selected.map((key, k) => (
        <View style={{ width: "17%", marginBottom: 20 }} key={k}>
          {key === 0 ? (
            <View style={{ ...styles.button, ...styles.buttonNone }}>
              <Text style={{ ...styles.text, ...styles.buttonText }}>
                {key > 0 && key}
              </Text>
            </View>
          ) : (
            <ImageBackground
              style={{ flex: 1, ...styles.button }}
              source={images.bouleUnderline}
            >
              <Text style={{ ...styles.text, ...styles.buttonText }}>
                {key > 0 && key}
              </Text>
            </ImageBackground>
          )}
        </View>
      ))}
    </View>
  );
}

export function fakeData(limit: number = 24, length: number = 6): number[] {
  const arr: number[] = [];

  for (let i = 1; i <= length; i++) {
    arr.push(Math.floor(Math.random() * limit) + 1);
  }

  return arr;
}

const styles = StyleSheet.create({
  container: {
    margin: spaceWidth,
    backgroundColor: Colors.white,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 20,
  },
  text: {
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  bigTitle: {
    fontSize: 17,
    fontFamily: fonts.poppins.SemiBold,
  },
  title: {
    color: Colors.blueLight,
    fontFamily: fonts.poppins.SemiBold,
    fontSize: 15,
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    alignSelf: "flex-start",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 45,
    height: 55,
    borderRadius: 25,
  },
  buttonNone: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  buttonText: {
    color: Colors.blueLight,
    textAlign: "center",
    fontFamily: fonts.poppins.SemiBold,
    top: -5,
  },
});
