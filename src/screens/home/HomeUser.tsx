import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import StarRating from "react-native-star-rating";

import { images } from "../../styles/Image";
import { ScreenDimensions } from "../../styles/Css";
import { Colors } from "../../styles";
import Divider from "../../components/Divider";
import { fonts } from "../../styles/fonts";

export default function HomeUser() {
  const user = useSelector((state: any) => state.Account.currentUser);

  return (
    <View style={styles.container}>
      <Divider
        color={Colors.grey}
        style={{ justifyContent: "space-between" }}
        before={
          <View style={styles.usercontainer}>
            <View style={styles.userpic}>
              <View style={{ alignSelf: "flex-start" }}>
                <Image
                  source={images.profile}
                  style={styles.profilepic}
                  borderRadius={(ScreenDimensions.widthScreen * 0.17) / 2}
                />
                <UserStatus />
              </View>
            </View>
            <View style={styles.user}>
              <Text
                style={styles.username}
                children={`Hello ${user.firstName}!`}
              />
              <StarRating
                starSize={16}
                maxStars={6}
                disabled={true}
                rating={user.stars}
                fullStarColor={Colors.yellow}
                containerStyle={{
                  justifyContent: "flex-start",
                  marginTop: 5,
                  marginBottom: 10,
                }}
                starStyle={{
                  marginRight: 2,
                }}
              />
              <Text style={{ ...styles.text }}>
                Vous avez{" "}
                <Text
                  style={{ ...styles.text, fontFamily: fonts.poppins.SemiBold }}
                  children={`${user.stars} ${
                    user.stars > 1 ? "grilles" : "grille"
                  }`}
                />
              </Text>
              <Text
                style={{ ...styles.text }}
                children="sur le prochain tirage"
              />
            </View>
          </View>
        }
        after={
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...styles.text }}>Tirage toutes les</Text>
            <Divider
              before={
                <Text
                  style={{ ...styles.text, fontWeight: "700" }}
                  children="7 min"
                />
              }
            />
            <Divider
              before={
                <Text
                  style={{ ...styles.text, fontWeight: "700" }}
                  children="24h / 24"
                />
              }
            />
            <Divider
              before={
                <Text
                  style={{ ...styles.text, fontWeight: "700" }}
                  children="7j / 7"
                />
              }
            />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  userpic: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  profilepic: {
    borderWidth: 3,
    borderColor: Colors.blueLight,
    width: ScreenDimensions.widthScreen * 0.17,
    height: ScreenDimensions.widthScreen * 0.17,
    resizeMode: "cover",
  },
  usercontainer: {
    flexDirection: "row",
  },
  user: {
    marginLeft: 5,
  },
  username: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: fonts.poppins.Medium,
  },
});

function UserStatus() {
  return (
    <View
      style={{
        backgroundColor: Colors.green,
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        borderWidth: 2,
        borderColor: Colors.blueLight,
        position: "absolute",
        bottom: 8,
        right: 8,
      }}
    />
  );
}
