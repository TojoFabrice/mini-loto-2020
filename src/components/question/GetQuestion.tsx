import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../styles";
import { fonts } from "../../styles/fonts";
import { Input } from "../inputs/Input";

interface GetQuestionProps {
  question?: {
    "@id": string;
    "@type": string;
    choices: any[];
    id: number;
    ifNo: string | null;
    ifYes: string | null;
    isEnabled: boolean;
    question: string;
    type: string;
  };
  form?: {
    data: any;
    onChangeText: any;
  };
  next?: Function;
}

export default function GetQuestion({
  question,
  form,
  next,
}: GetQuestionProps) {
  const validate = (key: string | number) => () => {
    if (form?.data[key] && form?.data[key] !== "") {
      if (next) next();
    }
  };

  return !question ? null : (
    <View>
      {(() => {
        switch (question.type) {
          default:
            return (
              <View>
                <Text style={styles.text}>{question.question}</Text>
                <Input
                  value={form ? form.data[question.id] : ""}
                  onChangeText={form && form.onChangeText(question.id)}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={validate(question.id)}
                >
                  <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
              </View>
            );
        }
      })()}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontFamily: fonts.poppins.regular,
    marginBottom: 5,
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
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: fonts.poppins.regular,
    color: Colors.white,
    textAlign: "center",
    fontSize: 17,
  },
});
