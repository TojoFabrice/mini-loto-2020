import * as Font from "expo-font";

const allFont = [
  { "Poppins-Black": require("../../assets/fonts/Poppins/Poppins-Black.ttf") },
  {
    "Poppins-BlackItalic": require("../../assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
  },
  { "Poppins-Bold": require("../../assets/fonts/Poppins/Poppins-Bold.ttf") },
  {
    "Poppins-BoldItalic": require("../../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
  },
  {
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
  },
  {
    "Poppins-ExtraLightItalic": require("../../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
  },
  {
    "Poppins-Italic": require("../../assets/fonts/Poppins/Poppins-Italic.ttf"),
  },
  { "Poppins-Light": require("../../assets/fonts/Poppins/Poppins-Light.ttf") },
  {
    "Poppins-LightItalic": require("../../assets/fonts/Poppins/Poppins-LightItalic.ttf"),
  },
  {
    "Poppins-Medium": require("../../assets/fonts/Poppins/Poppins-Medium.ttf"),
  },
  {
    "Poppins-MediumItalic": require("../../assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
  },
  {
    "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  },
  {
    "Poppins-SemiBold": require("../../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  },
  {
    "Poppins-SemiBoldItalic": require("../../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
  },
  { "Poppins-Thin": require("../../assets/fonts/Poppins/Poppins-Thin.ttf") },
  {
    "Poppins-ThinItalic": require("../../assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
  },
];

export const fonts = {
  poppins: {
    black: "Poppins-Black",
    blackItalic: "Poppins-BlackItalic",
    bold: "Poppins-Bold",
    boldItalic: "Poppins-BoldItalic",
    ExtraLight: "Poppins-ExtraLight",
    ExtraLightItalic: "Poppins-ExtraLightItalic",
    Italic: "Poppins-Italic",
    light: "Poppins-Light",
    lightItalic: "Poppins-LightItalic",
    Medium: "Poppins-Medium",
    MediumItalic: "Poppins-MediumItalic",
    regular: "Poppins-Regular",
    SemiBold: "Poppins-SemiBold",
    SemiBoldItalic: "Poppins-SemiBoldItalic",
    thin: "Poppins-Thin",
    thinItalic: "Poppins-ThinItalic",
  },
};

export const fontAssets = allFont.map(async (font: any) => await Font.loadAsync(font));
