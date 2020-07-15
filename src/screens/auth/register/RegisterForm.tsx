import React, { useState } from "react";
import { View, ActivityIndicator, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Input } from "../../../components/inputs/Input";
import useForm, { useValidation } from "../../../hooks/useForm";
import { Icon } from "react-native-elements";
import { Colors } from "../../../styles";
import styles from "./RegisterStyle";
import { images } from "../../../styles/Image";
import { ScreenDimensions } from "../../../styles/Css";
import { authentificationRegister } from "../../../controllers/AccountControllers";
import { countries } from "../../../common/country";
import Question from "../../../components/question/Question";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  civility: "",
  address: "",
  addressLine2: "",
  zipCode: "",
  city: "",
  country: "",
};

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [unAuth, setUnAuth] = useState("");
  const { data, onChangeText } = useForm(initialState);
  const { errors, validateAll, onValidate, onChangeValidate } = useValidation(
    data,
    formValidator
  );

  const register = async () => {
    if (validateAll()) {
      if (!(await authentificationRegister(data))) {
        setUnAuth("Une erreur s'est survenue lors de la sauvegarde");
      }
    }
    setLoading(false);
  };

  const onSubmit = () => {
    if (validateAll()) setShowQuestion(true);
  };

  const onSubmitQuestion = () => {
    setShowQuestion(false);
    setLoading(true);
    register();
  };

  return (
    <View>
      <Question show={showQuestion} onSubmit={onSubmitQuestion} />
      <View style={styles.profile}>
        <Image
          source={images.profile}
          style={styles.profilepic}
          borderRadius={(ScreenDimensions.widthScreen * 0.2) / 2}
        />
        <View
          style={{
            backgroundColor: Colors.blueLight,
            borderRadius: 20,
            position: "absolute",
            bottom: 2,
            right: 6,
            padding: 5,
          }}
        >
          <Icon name="edit" type="material" size={18} color={Colors.white} />
        </View>
      </View>

      {unAuth !== "" && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{unAuth}</Text>
        </View>
      )}

      {Object.keys(initialState).map((id: string) => (
        <Input
          key={id}
          iconName={config[id] && config[id].icon}
          value={data[id]}
          onChangeText={onChangeValidate(id, onChangeText)}
          type={config[id] && config[id].type}
          placeholder={config[id] && config[id].placeholder}
          onBlur={onValidate(id, data[id])}
          error={errors[id]}
          options={config[id] && config[id].options}
        />
      ))}

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

const config: any = {
  firstName: {
    icon: "perm-identity",
    placeholder: "Nom",
  },
  lastName: {
    icon: "person",
    placeholder: "Prénom",
  },
  email: {
    icon: "email",
    placeholder: "Adresse mail",
  },
  password: {
    icon: "lock-open",
    type: "password",
    placeholder: "Mot de passe",
  },
  confirmPassword: {
    icon: "lock",
    type: "password",
    placeholder: "Répéter mot de passe",
  },
  civility: {
    icon: "people",
    placeholder: "Etat civil",
    type: "select",
    options: [
      { label: "Etat civil", value: "" },
      { label: "Homme", value: "men" },
      { label: "Femme", value: "women" },
    ],
  },
  address: {
    icon: "my-location",
    placeholder: "Adresse",
  },
  addressLine2: {
    icon: "place",
    placeholder: "Adresse 2",
  },
  zipCode: {
    icon: "data-usage",
    placeholder: "Code Postal",
  },
  city: {
    icon: "person-pin-circle",
    placeholder: "City",
  },
  country: {
    icon: "map",
    placeholder: "Pays",
    type: "select",
    options: [
      {
        label: "Pays",
        value: "",
      },
      ...countries.map((country) => ({
        label: `${country.flag} ${country.name}`,
        value: country.code,
      })),
    ],
  },
};

function formValidator(key: string, value: any, data: any) {
  switch (key) {
    case "firstName":
      return {
        valid: value !== "" && value.length >= 4,
        errorText: "Votre nom est trop court.",
      };

    case "lastName":
      return {
        valid: value !== "" && value.length >= 4,
        errorText: "Votre prénom est trop court.",
      };

    case "email":
      return {
        valid:
          value !== "" &&
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
        errorText: "Email non valide",
      };

    case "password":
      return {
        valid: value !== "" && value.length >= 6,
        errorText: "Mot de passe au moins 6 caractères.",
      };

    case "confirmPassword":
      if (value === "") {
        return {
          valid: false,
          errorText: "Mot de passe au moins 6 caractères.",
        };
      }
      return {
        valid: value === data.password,
        errorText: "Les mots de passe ne sont pas identiques",
      };

    case "address":
      return {
        valid: value !== "",
        errorText: "L'adresse est obligatoire",
      };

    case "zipCode":
      return {
        valid: value !== "",
        errorText: "Le code postal est obligatoire",
      };

    case "city":
      return {
        valid: value !== "",
        errorText: "Le city est obligatoire",
      };

    case "country":
      return {
        valid: value !== "",
        errorText: "Vous devez choisir un pays",
      };

    case "civility":
      return {
        valid: value !== "",
        errorText: "L'etat civil est obligatoire",
      };

    default:
      return {
        valid: true,
        errorText: "",
      };
  }
}
