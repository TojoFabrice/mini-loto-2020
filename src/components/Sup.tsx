import React from "react";
import { View, Text, TextStyle } from "react-native";

interface SupProps {
  text: string | number;
  sup: string | number;
  after?: string | number;
  style?: TextStyle;
}

export default function Sup({ text, sup, after, style = {} }: SupProps) {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "flex-start",
      }}
    >
      <Text style={style}>{text}</Text>
      <Text style={{ ...style, fontSize: 7 }}>{sup} </Text>
      {after && <Text style={style}>{after}</Text>}
    </View>
  );
}
