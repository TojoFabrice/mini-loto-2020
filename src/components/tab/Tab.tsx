import React, { ReactElement, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./TabStyle";
import { paddingWidth, spaceWidth } from "../../styles";

export default function Tab({
  tabs,
  children,
  title,
  titleCollapse = true,
  defaultValue = 0,
  blockTab = false,
  isPadding = true,
  marginTop = 0,
  onSwitchTab = undefined,
}: TabProps) {
  const [current, setCurrent] = useState(
    defaultValue <= 0 ? 0 : defaultValue - 1
  );

  const switchTab = (id: number = 1) => () => {
    if (!blockTab) {
      setCurrent(id);
    }

    if (onSwitchTab) onSwitchTab(current, id);
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: marginTop,
        ...(!isPadding ? { paddingTop: 0, paddingBottom: 0 } : {}),
      }}
    >
      {title && (
        <Text style={{ ...styles.headerTitle, ...paddingWidth }}>{title}</Text>
      )}
      <View
        style={{
          ...(titleCollapse ? styles.header : styles.headerSpace),
          marginRight: spaceWidth,
          marginLeft: spaceWidth,
        }}
      >
        {tabs.map((tab: TabTitle, k: number) => (
          <TouchableOpacity
            key={k}
            onPress={switchTab(k)}
            style={{
              ...(titleCollapse
                ? styles.titleContainer
                : styles.titleContainerSpace),
              ...(k === current ? styles.selectedTitleContainer : {}),
            }}
          >
            <Text
              style={{
                ...styles.title,
                ...(k === current ? styles.selectedTitle : {}),
              }}
            >
              {tab.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={isPadding ? paddingWidth : {}}>
        {children.map((c, id) =>
          id === current ? <View key={id}>{c}</View> : null
        )}
      </View>
    </View>
  );
}

interface TabProps {
  tabs: Array<TabTitle>;
  children: Array<ReactElement>;
  isPadding?: boolean;
  defaultValue?: number;
  blockTab?: boolean;
  title?: string;
  titleCollapse?: boolean;
  marginTop?: number;
  onSwitchTab?: (current: number, index: number) => void | any;
}

interface TabTitle {
  text: string;
}
