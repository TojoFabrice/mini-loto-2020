import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { submit } from "redux-form";

import Logo from "../../../components/logo/Logo";
import { AccountServiceResetPasswordParams } from "../../../types/AccountType";
import ResetPasswordForm from "./ResetPasswordForm";
import { ResetPasswordCodeStyle } from "./ResetPasswordStyle";
import { LoginStyle } from "../login/LoginStyle";
import { authentificationResetPassword } from "../../../controllers/AccountControllers";

const ResetPassword = ({ submit, navigation: { navigate } }: any) => {
  const [error, setError] = useState();

  const _restePassword = async (values: AccountServiceResetPasswordParams) => {
    await authentificationResetPassword(values);
    navigate("Home");
  };

  const onReset = () => {
    submit("resetpasswordForm");
    navigate("Home");
  };

  return (
    <View style={ResetPasswordCodeStyle.container}>
      <Logo style={LoginStyle.logo} />

      <Text style={{ fontSize: 24, marginBottom: 25 }}>
        Nouveau mot de passe
      </Text>

      {error && (
        <View style={LoginStyle.notificationContent}>
          <Text style={LoginStyle.notificationMessage}>{error}</Text>
        </View>
      )}

      <ResetPasswordForm onSubmit={_restePassword} />

      <Button
        title="Confirmer"
        buttonStyle={ResetPasswordCodeStyle.button}
        onPress={onReset}
      />
    </View>
  );
};

const stateToProps = (state) => {
  return {};
};

const actionToProps = { submit };

export default connect(stateToProps, actionToProps)(ResetPassword);
