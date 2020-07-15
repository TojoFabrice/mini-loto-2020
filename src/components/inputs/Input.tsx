import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProperties,
  Picker,
  NativeSyntheticEvent,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";

import styles from "./inputStyle";
import { Colors } from "../../styles";
import { fonts } from "../../styles/fonts";

export function Input({
  value,
  onChangeText,
  placeholder,
  iconName,
  iconRight,
  secureTextEntry,
  options,
  type = "",
  onBlur = () => {},
  iconType = "material",
  error = "",
}: InputProps) {
  const inputRef: any = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [color, setColor] = useState(true);
  const [picker, setPicker] = useState(false);
  const [pickerValue, setPickerValue] = useState(
    options && options.length > 0 ? options[0].label : ""
  );

  const togglePassword = () => setShowPassword(!showPassword);

  const onFocus = () => {
    if (type === "select") {
      setPicker(!picker);
    }
    setColor(false);
    inputRef.current?.focus();
  };

  const onBlurInput = (e: NativeSyntheticEvent<any>) => {
    setPicker(false);
    onBlur(e);
  };

  const onChangePicker = (value: string) => {
    if (onChangeText) onChangeText(value);
    const opt = options?.find((o) => o.value === value);
    if (opt) setPickerValue(opt.label);
  };

  const iconColor = error
    ? "red"
    : color
    ? Colors.inactiveLight
    : Colors.activeLight;
  const boxColor = error
    ? { borderColor: "red" }
    : color
    ? { borderColor: Colors.inactiveLight }
    : { borderColor: Colors.activeLight };
  const textColor = error
    ? { color: "red" }
    : color
    ? { color: Colors.inactiveLight }
    : { color: Colors.activeLight };

  if (!iconRight && type === "password") {
    iconRight = {
      name: "remove-red-eye",
      color: iconColor,
      onPress: togglePassword,
    };
  }

  const InputPicker = React.memo(() => {
    return (
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={value}
          onValueChange={onChangePicker}
          mode="dialog"
          style={pickerStyles.style}
          itemStyle={pickerStyles.itemStyle}
        >
          {options &&
            options.map(({ label, value }, key) => (
              <Picker.Item
                label={label}
                value={value}
                key={key}
                color={iconColor}
              />
            ))}
        </Picker>
      </View>
    );
  });

  return (
    <>
      {error !== "" && (
        <View style={styles.errorcontainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      <TouchableOpacity
        style={{
          ...styles.inputContainer,
          ...boxColor,
          ...(error !== "" ? styles.inputerror : {}),
        }}
        onPress={onFocus}
      >
        {iconName && (
          <Icon
            color={iconColor}
            name={iconName}
            type={iconType}
            style={styles.icon}
          />
        )}
        {type === "select" ? (
          Platform.OS === "ios" ? (
            <Text style={{ ...styles.input, ...textColor }}>{pickerValue}</Text>
          ) : (
            <InputPicker />
          )
        ) : (
          <TextInput
            ref={inputRef}
            placeholder={placeholder}
            style={{ ...styles.input, ...textColor }}
            value={type === "select" ? pickerValue : value}
            onChangeText={onChangeText}
            onBlur={onBlurInput}
            onFocus={onFocus}
            autoCapitalize="none"
            secureTextEntry={
              secureTextEntry || (type === "password" && !showPassword)
            }
          />
        )}
        {type === "select" && Platform.OS === "ios" ? (
          <Icon
            name={picker ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            type={"material"}
            color={iconColor}
            style={styles.iconRight}
            onPress={onFocus}
          />
        ) : (
          iconRight && (
            <Icon
              name={iconRight.name}
              type={iconRight.type || "material"}
              color={iconRight.color}
              style={styles.iconRight}
              onPress={iconRight.onPress}
            />
          )
        )}
      </TouchableOpacity>
      {picker && Platform.OS === "ios" && <InputPicker />}
    </>
  );
}

export function CheckBox({ checked, onPress, color, text }: CheckBoxProps) {
  return (
    <View style={styles.inputCheckbox}>
      <Icon
        name={checked ? "check-box" : "check-box-outline-blank"}
        onPress={onPress}
        style={styles.icon}
        color={color}
      />
      <Text onPress={onPress} style={{ ...styles.text, color }}>
        {text}
      </Text>
    </View>
  );
}

const pickerStyles = StyleSheet.create({
  style: Platform.OS === "ios" ? {} : { height: 20 },
  itemStyle: {
    fontFamily: fonts.poppins.regular,
  },
});

interface InputProps extends TextInputProperties {
  iconName?: string;
  error?: string;
  iconType?: string;
  type?: string;
  options?: SelectOption[];
  iconRight?: {
    name: string;
    color: string;
    type?: string;
    onPress?: any;
  };
}

interface SelectOption {
  label: string;
  value: string;
}

interface CheckBoxProps {
  checked: boolean;
  onPress: any;
  color: string;
  text: string;
}
