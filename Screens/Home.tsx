import { View, Text,StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../AppStore/store";
import { GlobalStyle, Color } from "../constent/color";
export const Home = ({navigation}:any) => {
const user = useSelector((state:RootState)=>state.Auth.user)
console.log(user)
  return (
    <View style={GlobalStyle.RootScreenContainer}>
      <Text style={{ color: Color.White500 }}>Home</Text>
      
    </View>
  );
};

const Styles = StyleSheet.create({
img:{height:440,
width:320, 
backgroundColor:'#fff'}
})