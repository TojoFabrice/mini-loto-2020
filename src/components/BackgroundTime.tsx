import React, { ReactElement } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Svg, Circle } from "react-native-svg";

import { Colors } from "../styles";
import { fonts } from "../styles/fonts";

export default function BackgroundTime() {
  return (
    <View style={styles.container}>
      <View>
        <CircularText
          progress={60}
          text={
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: fonts.poppins.bold,
                  fontSize: 20,
                }}
              >
                02
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: fonts.poppins.regular,
                  fontSize: 13,
                }}
              >
                Minutes
              </Text>
            </View>
          }
        />
      </View>
      <View style={styles.timer}>
        <CircularText
          progress={60}
          text={
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: fonts.poppins.bold,
                  fontSize: 20,
                }}
              >
                35
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: fonts.poppins.regular,
                  fontSize: 13,
                }}
              >
                secondes
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}

function CircularText({ text = null, ...props }: CircularProps) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Circular {...props} />
      <View style={{ position: "absolute" }}>{text}</View>
    </View>
  );
}

interface CircularProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  text?: ReactElement | null;
}

function Circular({ progress, size = 85, strokeWidth = 4 }: CircularProps) {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const first = Colors.white;
  const second = Colors.timeDot;
  const third = Colors.blueLight;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = ((100 - progress) / 100) * circumference;
  const rprogressOffset = (progress / 100) * circumference;

  return (
    <Svg
      style={{ transform: [{ rotate: "50deg" }] }}
      width={size}
      height={size}
    >
      <Circle
        stroke={third}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDashoffset={-progressOffset}
        strokeDasharray={circumference}
        fill="transparent"
        strokeLinecap="round"
      />
      <Circle
        stroke={second}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth - 4 > 1 ? strokeWidth - 4 : strokeWidth}
        strokeDasharray={[0.5, 7]}
        strokeLinecap="round"
        fill="transparent"
      />
      <Circle
        stroke={first}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={rprogressOffset}
        fill="transparent"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  timer: {
    marginLeft: 20,
  },
});
