import { Text, View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../constent/color";

type ErrProp = {
  errMessage: string;
};

export const InputError = ({errMessage}:ErrProp) => {
  return (
    <View style={style.root}>
      <Ionicons name="md-alert-circle" size={24} color={Color.red700} />
      <Text style={style.text}>{errMessage}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
  text: {color:Color.red700,fontWeight:'bold',
fontSize:14},
});
