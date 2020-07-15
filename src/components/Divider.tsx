import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "../styles";

interface DividerProps {
  before: React.ReactElement;
  after?: React.ReactElement;
  style?: ViewStyle;
  color?: string;
}

export default function Divider({
  before,
  after,
  style = {},
  color = Colors.white,
}: DividerProps) {
  return (
    <View style={{ ...styles.container, ...style }}>
      {before}
      {before && (
        <View
          style={{
            ...styles.divider,
            marginRight: after ? 8 : 0,
            backgroundColor: color,
          }}
        />
      )}
      {after}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  divider: {
    width: 1,
    marginLeft: 8,
  },
});
