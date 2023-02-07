import { Pressable, StyleSheet, Text } from "react-native"
import { Color } from "../constent/color"

export const Chip=()=>{
  return (
    <Pressable
      style={({ pressed }) => [style.root, pressed && { opacity:0.7 }]}
    >
      <Text style={style.amountTxt}>{"\u0024"}199.99{'  '} </Text>
      <Text style={style.authorTxt}>by Dakpa</Text>
    </Pressable>
  );
}
const style = StyleSheet.create({
  root:{
    marginVertical:4,
    borderRadius:25,
    backgroundColor:Color.Gray500,
    padding:8,
    flexDirection:'row',
    paddingLeft:20,
    marginHorizontal:12
  },
  amountTxt:{
    color:Color.White500,
    fontSize:14,
    fontWeight:'bold'
  },
authorTxt:{
  color:Color.Gray300
}

})