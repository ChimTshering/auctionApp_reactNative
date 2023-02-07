
import {StyleSheet} from 'react-native'
export const Color = {
  Black500: "#222831",
  Gray500: "#393E46",
  Gray100: "#e5e5e5",
  Gray300:'#c9c9c9',
  Aqua500: "#00ADB5",
  White500: "#EEEEEE",
  red700: "#ff0068",
};

export const GlobalStyle = StyleSheet.create({
  RootScreenContainer: {
    flex: 1,
    backgroundColor: Color.Gray500,
    marginBottom: 0,
    paddingHorizontal: 20,
    // paddingVertical: 25,
  },
});