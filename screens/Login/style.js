import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: "center",
  },
  registerBtn: {
    alignItems: "center",
  },
});
export default style;
