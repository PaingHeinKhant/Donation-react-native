import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale,verticalScale } from "../../assets/styles/scaling";
const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: "center",
  },
  registerBtn: {
    alignItems: "center",
  },
  backButton:{
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),

  }
});
export default style;