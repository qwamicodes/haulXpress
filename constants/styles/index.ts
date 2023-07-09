import { ViewStyle } from "react-native";
import { DEFAULT_COLORS } from "../colors";

const notoSansRegular = "NotoSans-Regular";
const notoSansMedium = "NotoSans-Medium";
const notoSansSemiBold = "NotoSans-SemiBold";
const notoSansBold = "NotoSans-Bold";

//typography styles
export const textStyles = {
  xs: {
    regular: { lineHeight: 16, fontSize: 12, fontFamily: notoSansRegular },
    medium: { lineHeight: 16, fontSize: 12, fontFamily: notoSansMedium },
    semibold: { lineHeight: 16, fontSize: 12, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 16, fontSize: 12, fontFamily: notoSansBold },
  },
  sm: {
    regular: { lineHeight: 20, fontSize: 14, fontFamily: notoSansRegular },
    medium: { lineHeight: 20, fontSize: 14, fontFamily: notoSansMedium },
    semibold: { lineHeight: 20, fontSize: 14, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 20, fontSize: 14, fontFamily: notoSansBold },
  },
  base: {
    regular: { lineHeight: 24, fontSize: 16, fontFamily: notoSansRegular },
    medium: { lineHeight: 24, fontSize: 16, fontFamily: notoSansMedium },
    semibold: { lineHeight: 24, fontSize: 16, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 24, fontSize: 16, fontFamily: notoSansBold },
  },
  lg: {
    regular: { lineHeight: 28, fontSize: 18, fontFamily: notoSansRegular },
    medium: { lineHeight: 28, fontSize: 18, fontFamily: notoSansMedium },
    semibold: { lineHeight: 28, fontSize: 18, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 28, fontSize: 18, fontFamily: notoSansBold },
  },
  xl: {
    regular: { lineHeight: 28, fontSize: 20, fontFamily: notoSansRegular },
    medium: { lineHeight: 28, fontSize: 20, fontFamily: notoSansMedium },
    semibold: { lineHeight: 28, fontSize: 20, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 28, fontSize: 20, fontFamily: notoSansBold },
  },
  "2xl": {
    regular: { lineHeight: 32, fontSize: 24, fontFamily: notoSansRegular },
    medium: { lineHeight: 32, fontSize: 24, fontFamily: notoSansMedium },
    semibold: { lineHeight: 32, fontSize: 24, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 32, fontSize: 24, fontFamily: notoSansBold },
  },
  "3xl": {
    regular: { lineHeight: 36, fontSize: 30, fontFamily: notoSansRegular },
    medium: { lineHeight: 36, fontSize: 30, fontFamily: notoSansMedium },
    semibold: { lineHeight: 36, fontSize: 30, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 36, fontSize: 30, fontFamily: notoSansBold },
  },
  "4xl": {
    regular: { lineHeight: 40, fontSize: 36, fontFamily: notoSansRegular },
    medium: { lineHeight: 40, fontSize: 36, fontFamily: notoSansMedium },
    semibold: { lineHeight: 40, fontSize: 36, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 40, fontSize: 36, fontFamily: notoSansBold },
  },
  "5xl": {
    regular: { lineHeight: 48, fontSize: 48, fontFamily: notoSansRegular },
    medium: { lineHeight: 48, fontSize: 48, fontFamily: notoSansMedium },
    semibold: { lineHeight: 48, fontSize: 48, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 48, fontSize: 48, fontFamily: notoSansBold },
  },
  "6xl": {
    regular: { lineHeight: 60, fontSize: 60, fontFamily: notoSansRegular },
    medium: { lineHeight: 60, fontSize: 60, fontFamily: notoSansMedium },
    semibold: { lineHeight: 60, fontSize: 60, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 60, fontSize: 60, fontFamily: notoSansBold },
  },
  "7xl": {
    regular: { lineHeight: 72, fontSize: 72, fontFamily: notoSansRegular },
    medium: { lineHeight: 72, fontSize: 72, fontFamily: notoSansMedium },
    semibold: { lineHeight: 72, fontSize: 72, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 72, fontSize: 72, fontFamily: notoSansBold },
  },
  "8xl": {
    regular: { lineHeight: 96, fontSize: 96, fontFamily: notoSansRegular },
    medium: { lineHeight: 96, fontSize: 96, fontFamily: notoSansMedium },
    semibold: { lineHeight: 96, fontSize: 96, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 96, fontSize: 96, fontFamily: notoSansBold },
  },
  "9xl": {
    regular: { lineHeight: 128, fontSize: 128, fontFamily: notoSansRegular },
    medium: { lineHeight: 128, fontSize: 128, fontFamily: notoSansMedium },
    semibold: { lineHeight: 128, fontSize: 128, fontFamily: notoSansSemiBold },
    bold: { lineHeight: 128, fontSize: 128, fontFamily: notoSansBold },
  },
};

export const screenStyle: ViewStyle = {
  flex: 1,
  paddingHorizontal: 24,
  backgroundColor: DEFAULT_COLORS.gray[50],
};

export const centeringStyle: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};
