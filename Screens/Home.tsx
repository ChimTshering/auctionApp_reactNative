import { View, Text,StyleSheet, Image } from "react-native";
import { GlobalStyle, Color } from "../constent/color";
export const Home = () => {
  return (
    <View style={GlobalStyle.RootScreenContainer}>
      <Text style={{ color: Color.White500 }}>Home</Text>
      <Image
        source={{
          uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAuctionApp-769979d0-c592-4e0d-b093-8495b40b4731/ImagePicker/481f6d74-b036-4e99-9a04-3a33be13be1d.jpeg",
        }}
        style={Styles.img}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
img:{height:440,
width:320, 
backgroundColor:'#fff'}
})