import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { submit } from "redux-form";

import ForgotPasswordForm from "./ForgotPasswordForm";
import Logo from "../../../components/logo/Logo";
import { ForgotPasswordStyle } from "./ForgotPasswordStyle";
import ForgotPaswordCodeForm from "./ForgotPaswordCodeForm";
import {
  authentificationForgotPassword,
  authentificationResetPassword,
} from "../../../controllers/AccountControllers";

const ConfirmTitle = "Code de confirmation";
const ForgotTitle = "Mot de passe oublié ?";

const ForgotPassword = ({ submit, navigation: { navigate } }: any) => {
  const [isSendMail, setIsSendMail] = useState(false);

  const _forgotPassword = async ({ email }: any) => {
    const res = await authentificationForgotPassword(email);
    if (res) {
      setIsSendMail(true);
    }
  };

  const _forgotPasswordReset = async (values: any) => {
    const res = await authentificationResetPassword(values);
  };

  const forgotPasswordCodeForm = async (values: any) => {
    submit("forgotPasswordCodeForm");
    navigate("ResetPassword");
  };

  const forgotForm = async (values: any) => {
    submit("forgotForm");
    setIsSendMail(true);
  };

  return (
    <View style={ForgotPasswordStyle.container}>
      <Logo style={ForgotPasswordStyle.logo} />

      <Text style={{ fontSize: 24, marginBottom: 25 }}>
        {isSendMail ? ConfirmTitle : ForgotTitle}
      </Text>

      {isSendMail ? (
        <ForgotPaswordCodeForm onSubmit={_forgotPasswordReset} />
      ) : (
        <ForgotPasswordForm onSubmit={_forgotPassword} />
      )}

      <Button
        title={isSendMail ? "Confirmation" : "Envoyer"}
        buttonStyle={ForgotPasswordStyle.button}
        onPress={isSendMail ? forgotPasswordCodeForm : forgotForm}
      />
    </View>
  );
};

const stateToProps = (state) => {
  return {};
};

const actionToProps = { submit };

export default connect(stateToProps, actionToProps)(ForgotPassword);
