import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../../styles";
import styles from "./LoginFormStyle";
import useForm from "../../../hooks/useForm";
import { LoginValidation } from "../../../services/ValidationForm";
import { authentificationLogin } from "../../../controllers/AccountControllers";
import { Input, CheckBox } from "../../../components/inputs/Input";
import { TouchableOpacity } from "react-native-gesture-handler";

const arr: string[] = [];

export default function LoginForm() {
  const navigation = useNavigation();

  const [loading, setLoading] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [unAuth, setUnAuth] = React.useState("");
  const { data, onChangeText } = useForm({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState(arr);
  const violations = LoginValidation(data);
  const validate = (id: "username" | "password") => () => {
    setUnAuth("");
    setErrors(
      violations[id] !== "" ? [...errors, id] : errors.filter((e) => e !== id)
    );
  };

  const toggleRememberMe = () => setRememberMe(!rememberMe);

  const auth = async () => {
    const res = await authentificationLogin(data);
    if (!res) {
      setLoading(false);
      setUnAuth("Email ou mot de passe incorrect.");
      setTimeout(() => {
        setUnAuth("");
      }, 3000);
    }
  };

  const onSubmit = () => {
    if (data.username !== "" && data.password !== "") {
      setLoading(true);
      auth();
    }
  };

  return (
    <View>
      {unAuth !== "" && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{unAuth}</Text>
        </View>
      )}
      <Input
        value={data.username}
        onChangeText={onChangeText("username")}
        iconName="mail"
        placeholder="Adresse mail"
        error={errors.includes("username") ? violations.username : ""}
        onBlur={validate("username")}
      />

      <Input
        value={data.password}
        onChangeText={onChangeText("password")}
        iconName="lock"
        placeholder="Mot de passe"
        error={errors.includes("password") ? violations.password : ""}
        onBlur={validate("password")}
        type="password"
      />

      <CheckBox
        text="Se souvenir de moi"
        checked={rememberMe}
        onPress={toggleRememberMe}
        color={rememberMe ? Colors.activeLight : Colors.inactiveLight}
      />

      <View style={styles.submit}>
        {loading ? (
          <ActivityIndicator
            size={60}
            style={{ backgroundColor: Colors.blueDark, borderRadius: 30 }}
          />
        ) : (
          <TouchableOpacity onPress={onSubmit}>
            <Icon
              name="arrow-forward"
              type="material"
              color={Colors.white}
              containerStyle={styles.submitIconContainer}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
