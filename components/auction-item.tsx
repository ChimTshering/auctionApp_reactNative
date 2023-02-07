import {
  View,
  StyleSheet,
  Button,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Color } from "../constent/color";
import { ImageSlider } from "./ImageSlider";
import { ViewTrancate } from "./text-truncate";
import { HorizontalLine } from "./UI/HRLine";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Timer } from "./timer";
import { useSelector } from "react-redux";
import { RootState } from "../AppStore/store";

export const AuctionItem = () => {
const [addComment, setAddComment] = useState(false);
const navigation=useNavigation<any>()
const token = useSelector((state:RootState)=>state.User.token)
  return (
    <View style={style.root}>
      <View style={style.titleContain}>
        <Text style={style.title}> TITLE</Text>
        <Timer time={1}/>
      </View>
      <HorizontalLine color={Color.Gray500} />
      <View style={style.titleContain}>
        <Text style={style.title}>DESCRIPTION</Text>
      </View>
      <ViewTrancate />

      <View style={style.imgContain}>
        <ImageSlider
          imgUri={[
            "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAuctionApp-769979d0-c592-4e0d-b093-8495b40b4731/ImagePicker/c713d197-2f84-4dec-8687-16e3570b786b.jpeg",
          ]}
          rootStyle={{ borderRadius: 8 }}
        />
      </View>
      <HorizontalLine color={Color.Gray500} />
      <View style={style.titleContain}>
        <View style={style.textContain}>
          <Text style={style.text}>TOP : {"\u0024"} 199 By Dakpa</Text>
        </View>
        <Pressable
          style={style.add}
          onPress={() => token?.length && navigation.navigate("ItemDetail")}
        >
          <View style={style.floatItem}>
            <Text style={style.floatText}>12</Text>
          </View>
          <MaterialIcons
            name="add-shopping-cart"
            size={28}
            color={Color.Aqua500}
          />
        </Pressable>
      </View>
      {/* {addComment ? (
        <View style={{zIndex:2}}>
          <HorizontalLine color={Color.Gray500} />
          <ScrollView
            // horizontal
          >
            <View>
              <Text style={style.text}>TOP : {"\u0024"} 199 By Dakpa</Text>
              <Text style={style.text}>TOP : {"\u0024"} 199 By Dakpa</Text>
            </View>
            <View >
              <Text style={style.text}>TOP : {"\u0024"} 199 By Dakpa</Text>
              <Text style={style.text}>TOP : {"\u0024"} 199 By Dakpa</Text>
            </View>
            <View >
              <Text style={style.text}>TOP : {"\u0024"} 199 By Dakpa</Text>
              <Text style={style.text}>TOP : {"\u0024"} 199 By Dakpa</Text>
            </View>
          </ScrollView>
          <View>
            <Button title="add"></Button>
          </View>
        </View>
      ) : null} */}
    </View>
  );
};
const style = StyleSheet.create({
  root: {
    paddingVertical: 18,
    backgroundColor: Color.Black500,
    borderRadius: 12,
    // marginVertical:14
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Color.White500,
  },
  titleContain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  imgContain: {
    paddingHorizontal: 8,
    overflow: "hidden",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Color.White500,
    padding: 8,
  },
  textContain: {
    marginHorizontal: 14,
    borderRadius: 12,
    backgroundColor: Color.Gray500,
    flex: 4,
  },
  add: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Color.Aqua500,
    marginHorizontal: 4,
    position: "relative",
    marginRight: 12,
  },
  floatItem: {
    position: "absolute",
    top: -12,
    right: -13,
    zIndex: 2,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Color.Aqua500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.Black500,
    padding: 2,
  },
  floatText: {
    color: Color.White500,
    fontWeight: "bold",
  },
});
