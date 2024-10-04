import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./style";
const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        value={value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(val) => {
          setValue(val);
          props.onChangeText(val);
        }}
        placeholder={props.placeholder && props.placeholder}
        keyboardType={props.keyboardType && props.keyboardType}
      />
    </View>
  );
};

Input.defaultProps = {
  keyboardType: "default",
  onChangeText: () => {},
  secureTextEntry: false,
};

Input.PropTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
