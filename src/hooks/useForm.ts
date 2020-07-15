import React from "react";

export default function useForm(initialState = {}) {
  const [data, dispatch] = React.useReducer((state: any, action: any) => {
    switch (action.type) {
      case "ONCHANGE":
        return { ...state, ...action.payload };

      default:
        return state;
    }
  }, initialState);

  const onChangeText = (id: string) => (text: string) => {
    dispatch({ type: "ONCHANGE", payload: { [id]: text } });
  };

  return {
    data,
    onChangeText,
  };
}

interface Validator {
  (key: string, value: any, data: any): {
    valid: boolean;
    errorText: string;
  };
}

export function useValidation(data: any, validator: Validator) {
  const arr: string[] = [];
  const obj: any = {};
  const [_errors, _setErrors] = React.useState(arr);
  const [errors, setErrors] = React.useState(obj);

  const validate = (id: string, value: any): boolean => {
    const err = _errors.filter((e) => e !== id);
    const { valid, errorText } = validator(id, value, data);
    _setErrors(valid ? err : [...err, id]);

    if (!valid) errors[id] = errorText;
    else delete errors[id];
    setErrors(errors);

    return valid;
  };

  const onValidate = (id: string, value: any) => () => {
    validate(id, value);
  };

  const onChangeValidate = (id: string, onChangeText: any) => (value: any) => {
    onChangeText(id)(value);
    validate(id, value);
  };

  const validateAll = (): boolean => {
    let valid: boolean = true;

    Object.keys(data).map((key) => {
      const _valid = validate(key, data[key]);
      if (valid) valid = _valid;
    });

    return valid;
  };

  return {
    errors,
    validate,
    onValidate,
    onChangeValidate,
    validateAll,
  };
}
