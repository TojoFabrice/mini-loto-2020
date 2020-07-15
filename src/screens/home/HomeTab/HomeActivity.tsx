import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import Tab from "../../../components/tab/Tab";
import Divider from "../../../components/Divider";
import { ShowTirage } from "../../grid/tirage/PlayedTirage";
import { Colors, paddingHorizWidth } from "../../../styles";
import { fonts } from "../../../styles/fonts";
import { useGet } from "../../../hooks/useApi";
import { getDate, getTime } from "../../../services/time";
import { useNextLottery } from "../../../hooks/useLottery";

export default function HomeActivity() {
  const lotteryDraw = useGet(`/lottery_draws`, []);
  const nextLotteryDraw = useNextLottery();

  return (
    <View style={{ marginTop: 10 }}>
      <Tab
        title="Mes activités"
        tabs={[{ text: "Derniers tirages" }, { text: "Prochain tirage" }]}
        isPadding={false}
        titleCollapse={false}
      >
        {lotteryDraw.loading ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            {lotteryDraw.data &&
              lotteryDraw.data.slice(-4).map(
                (u: any, k: number) =>
                  u.played && (
                    <View key={k}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "rgba(150, 150, 150, 0.1)",
                          marginBottom: 15,
                          ...paddingHorizWidth,
                          paddingBottom: 8,
                          paddingTop: 8,
                        }}
                      >
                        <Text
                          style={{
                            ...styles.text,
                            fontFamily: fonts.poppins.SemiBold,
                            fontSize: 16,
                          }}
                          children={`Tirage N° ${u.id}`}
                        />
                        <Divider
                          before={
                            <Text
                              style={styles.text}
                              children={getDate(u.drawnAt)}
                            />
                          }
                          after={
                            <Text
                              style={styles.text}
                              children={`à ${getTime(u.drawnAt)}`}
                            />
                          }
                          color={Colors.grey}
                        />
                      </View>
                      <View style={paddingHorizWidth}>
                        <ShowTirage
                          selected={[
                            u.firstResult,
                            u.secondResult,
                            u.thirdResult,
                            u.fourthResult,
                            u.fifthResult,
                            u.sixthResult,
                          ]}
                        />
                      </View>
                    </View>
                  )
              )}
          </View>
        )}
        {nextLotteryDraw.loading || nextLotteryDraw.lotterySeq.length === 0 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            {nextLotteryDraw.lotterySeq.map((lottery: any, key: number) => (
              <View
                key={key}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgba(150, 150, 150, 0.1)",
                  marginBottom: 15,
                  ...paddingHorizWidth,
                  paddingBottom: 8,
                  paddingTop: 8,
                }}
              >
                <Text
                  style={{
                    ...styles.text,
                    fontFamily: fonts.poppins.SemiBold,
                    fontSize: 16,
                  }}
                  children={`Tirage${lottery.id ? ` N° ${lottery.id}` : ""}`}
                />
                <Divider
                  before={
                    <Text
                      style={styles.text}
                      children={getDate(lottery.drawnAt)}
                    />
                  }
                  after={
                    <Text
                      style={styles.text}
                      children={`à ${getTime(lottery.drawnAt)}`}
                    />
                  }
                  color={Colors.grey}
                />
              </View>
            ))}
          </View>
        )}
      </Tab>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.blueLight,
    fontFamily: fonts.poppins.regular,
  },
});
