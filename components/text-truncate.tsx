import { useState } from "react";
import { Pressable, Text,StyleSheet } from "react-native"
import { Color } from "../constent/color";

export const ViewTrancate=()=>{
  const [hide, setHide] = useState(true)
  return (
    <Pressable style={style.pressable} onPress={() => setHide(!hide)}>
      <Text numberOfLines={hide ? 2 : undefined} style={style.text}>
        React has been designed from the start for gradual adoption, and you can
        use as little or as much React as you need. Perhaps you only want to add
        some “sprinkles of interactivity” to an existing page. React components
        are a great way to do that. The majority of websites aren’t, and don’t
        need to be, single-page apps. With a few lines of code and no build
        tooling, try React in a small part of your website. You can then either
        gradually expand its presence, or keep it contained to a few dynamic
        widgets.{"\n"}
        {"\n"}
        <Text>created by -Dakpa.</Text>
        {"\n"}
        <Text>location-selise</Text>
      </Text>
    </Pressable>
  );
}
const style = StyleSheet.create({
  pressable:{
    paddingHorizontal:8
  },
  text:{
    color:Color.White500
  }
})