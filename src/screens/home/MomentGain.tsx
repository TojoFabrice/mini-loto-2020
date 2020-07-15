import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "../../styles";
import { images } from "../../styles/Image";
import { fonts } from "../../styles/fonts";

const currency = "€";
export default function MomentGain() {
  const data: any = {
    grand: {
      name: "Grand",
      price: "7.500",
    },
    major: {
      name: "Major",
      price: "7.500",
    },
    minor: {
      name: "Minor",
      price: "7.500",
    },
    mini: {
      name: "Mini",
      price: "7.500",
    },
    supermini: {
      name: "Super-Mini",
      price: "7.500",
    },
    bonus: {
      name: "Bonus",
      price: "7.500",
    },
  };

  return (
    <>
      <View>
        <Text
          style={{
            ...styles.text,
            ...styles.title,
          }}
        >
          Gain du moment
        </Text>
      </View>
      <View style={styles.container}>
        {Object.keys(data).map((property, k) => {
          if (property === "grand") {
            return (
              <View key={property} style={{ ...styles[`gainContainer${k}`] }}>
                <ImageBackground
                  style={{
                    height: 140,
                    marginBottom: 15,
                    marginLeft: -65,
                    paddingTop: 25,
                    paddingLeft: 110,
                  }}
                  source={images.home.gainGrand}
                  resizeMode="stretch"
                  borderRadius={23}
                >
                  <Text
                    style={{
                      ...styles.text,
                      ...styles.name,
                      ...styles[`name${k}`],
                    }}
                  >
                    {data[property].name}
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      ...styles.price,
                      ...styles[`price${k}`],
                    }}
                  >{`${currency} ${data[property].price}`}</Text>
                </ImageBackground>
              </View>
            );
          } else {
            return (
              <View
                key={property}
                style={{
                  ...styles.gainContainer,
                  ...styles[`gainContainer${k}`],
                }}
              >
                <Text
                  style={{
                    ...styles.text,
                    ...styles.name,
                    ...styles[`name${k}`],
                  }}
                >
                  {data[property].name}
                </Text>
                <Text
                  style={{
                    ...styles.text,
                    ...styles.price,
                    ...styles[`price${k}`],
                  }}
                >{`${currency} ${data[property].price}`}</Text>
              </View>
            );
          }
        })}
      </View>
    </>
  );
}

const styles: any = StyleSheet.create({
  text: {
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  title: {
    color: Colors.yellow,
    textAlign: "center",
    fontSize: 22,
    fontFamily: fonts.poppins.regular,
    marginBottom: 20,
  },
  name: {
    color: Colors.whiteShadow,
    fontSize: 15,
    fontWeight: "600",
  },
  name0: {
    fontSize: 18,
  },
  price: {
    fontFamily: fonts.poppins.SemiBold,
    fontSize: 16,
  },
  price0: {
    fontSize: 40,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gainContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    width: "49%",
  },
  gainContainer0: {
    width: "100%",
    paddingLeft: 60,
  },
  gainContainer1: {
    width: "32%",
  },
  gainContainer2: {
    width: "32%",
  },
  gainContainer3: {
    width: "32%",
  },
});
