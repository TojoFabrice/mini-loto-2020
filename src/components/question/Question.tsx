import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  ActivityIndicator,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../styles/Image";
import { Colors } from "../../styles";
import { fonts } from "../../styles/fonts";
import { getArray } from "../../services/Utils";
import GetQuestion from "./GetQuestion";
import useForm from "../../hooks/useForm";
import { useQuestion } from "../../hooks/useQuestion";

interface QuestionProps {
  show: boolean;
  onSubmit: (data: any) => void | any;
}

export default function Question({ show, onSubmit }: QuestionProps) {
  const length = 6;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const { questions } = useQuestion();
  const list = questions.slice(0, length);
  const form = useForm();

  if (!show) return null;

  const next = () => {
    if (currentQuestion + 1 <= length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onSubmit(form.data);
    }
  };

  return (
    <Modal>
      <ImageBackground style={styles.container} source={images.bgblur}>
        <SafeAreaView>
          <ScrollView>
            <ImageBackground
              source={images.questionbg}
              style={styles.inner}
              borderRadius={10}
            >
              <Image style={styles.img} source={images.questionmark} />
              <Text style={styles.title}>
                Répondez à ces six questions pour jouer et gagner!
              </Text>
              <Line />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  {getArray(length).map((a, k) => (
                    <View key={k} style={styles.numberC}>
                      {k > 0 && (
                        <Line
                          height={1}
                          width={10}
                          backgroundColor={Colors.white}
                          margin="none"
                        />
                      )}
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 50,
                          width: 23,
                          height: 23,
                          paddingTop: 2,
                          ...(a <= currentQuestion
                            ? {
                                backgroundColor: Colors.yellow,
                              }
                            : {
                                backgroundColor: Colors.white,
                              }),
                        }}
                      >
                        <Text
                          style={{
                            color: Colors.darkBlue,
                            fontFamily: fonts.poppins.bold,
                          }}
                        >
                          {a}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
                <View>
                  <Text
                    style={{
                      ...styles.text,
                      color: Colors.yellow,
                      textAlign: "right",
                    }}
                  >
                    Question
                  </Text>
                  <Text
                    style={{
                      ...styles.text,
                      color: Colors.yellow,
                      textAlign: "right",
                    }}
                  >
                    {`${currentQuestion}/${length}`}
                  </Text>
                </View>
              </View>
              <Line />
              <View>
                {list.length === 0 ? (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <ActivityIndicator size={50} />
                  </View>
                ) : (
                  <GetQuestion
                    question={list[currentQuestion - 1]}
                    form={form}
                    next={next}
                  />
                )}
              </View>
            </ImageBackground>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Modal>
  );
}

function Line({
  width = undefined,
  height = 2,
  backgroundColor = Colors.darkBlue,
  margin = "auto",
}: any) {
  return (
    <View
      style={{
        height,
        backgroundColor,
        marginTop: margin === "auto" ? 15 : undefined,
        marginBottom: margin === "auto" ? 15 : undefined,
        width,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  inner: {
    margin: 20,
    minHeight: 200,
    marginTop: 200,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  title: {
    color: Colors.yellow,
    fontFamily: fonts.poppins.SemiBold,
    fontSize: 20,
  },
  img: {
    alignSelf: "center",
    top: -55,
    marginBottom: -55,
  },
  text: {
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
  },
  numberC: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.white,
    marginRight: 20,
  },
});
