import { Pressable,Text,StyleSheet } from "react-native"
import { Color } from "../constent/color";

type ButtonProps = {
  onPress: () => void;
  BtnLabel:string
};

export const RightButton = ({ BtnLabel,onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style = {style.rootContainer}>
      <Text style = {style.text}>{BtnLabel}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  rootContainer:{
    marginHorizontal:8, padding:8,backgroundColor:Color.Gray500, borderRadius:5
  },text:{
color:'#ffffff',
fontWeight:'bold'
  }
})