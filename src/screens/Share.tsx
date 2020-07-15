import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles";
import { fonts } from "../styles/fonts";

export default function Share({ grid = true }) {
  const data = [
    {
      name: "Share",
    },
    {
      name: "Grille automatique",
    },
    {
      name: "Grille sans PUB",
    },
    {
      name: "Ajouter des grilles gratuitement",
    },
  ];

  return (
    <View style={styles.container}>
      {grid && <Text style={styles.title}>jeu 100% gratuit</Text>}
      <View style={styles.middle}>
        <Slug />
        <Text style={{ ...styles.text, marginLeft: 20 }}>
          Tirage contrôlé par huissier, voir les{" "}
        </Text>
        <Text
          style={{ ...styles.text, textDecorationLine: "underline" }}
          children="CGV"
        />
      </View>
      <View style={styles.buttonContainer}>
        {data.map((d, k) => (
          <View key={k} style={{ ...styles.button, ...styles[`button${k}`] }}>
            <Text style={{ ...styles.buttonText, ...styles[`buttonText${k}`] }}>
              {d.name}
            </Text>
          </View>
        ))}
      </View>
      <Text style={styles.tirage}>Voir le tirage en live</Text>
    </View>
  );
}

function Slug() {
  const width = 15;
  const height = 30;
  const radius = 5;
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width,
          height,
          backgroundColor: Colors.darkBlue,
          borderTopLeftRadius: radius,
          borderBottomLeftRadius: radius,
        }}
      />
      <View style={{ width, height, backgroundColor: Colors.white }} />
      <View
        style={{
          width,
          height,
          backgroundColor: Colors.red,
          borderTopRightRadius: radius,
          borderBottomRightRadius: radius,
        }}
      />
    </View>
  );
}

const styles: any = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: Colors.blueLight,
    marginTop: 20,
    paddingBottom: 10,
  },
  title: {
    color: Colors.yellow,
    fontWeight: "700",
    letterSpacing: 3,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  text: {
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  middle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.blueLight,
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    marginBottom: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  buttonText: {
    textAlign: "center",
    width: "100%",
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  button0: {
    backgroundColor: Colors.yellow,
    borderWidth: 0,
  },
  buttonText0: {
    color: Colors.black,
  },
  button1: {
    width: "49%",
  },
  button2: {
    width: "49%",
  },
  tirage: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
});
