import { StyleSheet } from "react-native";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../assets/styles/scaling";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getFontFamily } from "../../assets/fonts/helper";
const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIntroText: {
    fontFamily: getFontFamily("Inter", "400"),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: "#636776",
  },
  userName: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  hightLightContainer: {
    marginHorizontal: horizontalScale(24),
  },
  hightLightImage: {
    width: "100%",
    height: verticalScale(160),
  },

  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItems: {
    marginRight: horizontalScale(10),
  },
  categoriesContainer: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
  donationsItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  donationsItems: {
    maxWidth: "49%",
    marginBottom: verticalScale(23),
  },
});

export default style;
