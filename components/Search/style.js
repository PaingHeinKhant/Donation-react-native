import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";
const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: "100%",
    fontFamily: getFontFamily("Inter", "600"),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: "#686C7A",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(16),
    backgroundColor: "#f3f5f9",
    height: verticalScale(50),
    borderRadius: horizontalScale(10),
  },
});

export default style;
