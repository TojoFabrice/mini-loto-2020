import React, { useRef, useState } from "react";
import {
  Animated,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  Easing,
} from "react-native";
import Sup from "../../../components/Sup";
import { ShowTirage } from "./PlayedTirage";
import { images } from "../../../styles/Image";
import { fonts } from "../../../styles/fonts";
import { paddingWidth } from "../../../styles";

export default function AnimatedTirage({
  total,
  styles,
  selected,
  choose,
  showAdd,
}: any) {
  const rotate = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const [keyAnimated, setKeyAnimated] = useState(-1);

  const onChoose = (key: number) => () => {
    choose(key, (s: any[]) => {
      const animation = Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.7,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotate, {
          toValue: 1,
          duration: 450,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]);

      const removeAnimation = Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.7,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]);

      if (keyAnimated === -1) {
        setKeyAnimated(key);
        if (s.includes(key)) {
          animation.start(() => {
            setKeyAnimated(-1);
          });
        } else {
          removeAnimation.start(() => {
            setKeyAnimated(-1);
          });
        }
      }
    })();
  };

  return (
    <>
      <View style={styles.tirageContainer}>
        {total.map((key: number) => (
          <Animated.View
            style={{
              width: "25%",
              transform: [
                {
                  rotateY:
                    key === keyAnimated
                      ? rotate.interpolate({
                          inputRange: [0, 1],
                          outputRange: ["0deg", "360deg"],
                        })
                      : "0deg",
                },
                {
                  scale: key === keyAnimated ? scale : 1,
                },
              ],
            }}
            key={key}
          >
            <ImageBackground
              style={{ flex: 1, ...styles.button }}
              source={
                selected.includes(key) ? images.bouleSelected : images.boule
              }
            >
              <TouchableOpacity onPress={onChoose(key)}>
                <Text
                  style={{
                    ...styles.text,
                    ...styles.buttonText,
                    ...(selected.includes(key)
                      ? styles.buttonTextSelected
                      : {}),
                  }}
                >
                  {key}
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </Animated.View>
        ))}
      </View>
      <View style={{ ...paddingWidth }}>
        <Sup
          text="Votre 1"
          sup="ére"
          after="grille sur ce tirage"
          style={{
            ...styles.text,
            fontFamily: fonts.poppins.SemiBold,
            paddingBottom: 10,
          }}
        />
        <View>
          <ShowTirage selected={selected} />
        </View>
        <TouchableOpacity onPress={showAdd} style={styles.validate}>
          <Text style={styles.validateText}>Valider cette grille</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
