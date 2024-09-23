import { View, Text, Pressable } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import style from "./style";

const Button = (props) => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.buttonDisabled]}
      onPress={props.onPress}
    >
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
