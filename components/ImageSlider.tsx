import { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Color } from "../constent/color";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type ImgProps = {
  imgUri: string[];
  setImgUri: (imgUri: string[]) => void;
};

export const ImageSlider = ({ imgUri, setImgUri }: ImgProps) => {
const onDeletePress=(uri:string)=>{
  const filterUri = imgUri.filter(url =>url!==uri)
  setImgUri(filterUri)
}
  return (
    <View style={style.root}>
      <ScrollView
        showsHorizontalScrollIndicator
        horizontal
        pagingEnabled
        scrollEnabled
        contentContainerStyle={{ width: undefined }}
      >
        {imgUri.length > 0 ? (
          imgUri.map((imgUri) => (
            <View style={style.imgContainer}>
              <Pressable style={({pressed})=>[style.delete, pressed&&{opacity:0.5}]} onPress= {()=>onDeletePress(imgUri)}>
                <MaterialCommunityIcons
                  name="delete-forever"
                  size={32}
                  color={Color.red700}
                />
              </Pressable>
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{
                    uri: imgUri,
                  }}
                  style={style.img}
                  resizeMode="cover"
                />
              </View>
            </View>
          ))
        ) : (
          <View style={style.imgContainer}>
            <Text style={style.text}> Add some image for more Details...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    width: "95%",
    maxHeight: 400,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "scroll",
    marginHorizontal: 8,
    marginVertical: 6,
    alignSelf: "center",
    flexDirection: "row",
  },
  img: {
    height: "90%",
    width: "100%",
    // margin: 0,
    borderRadius: 8,
  },
  imgContainer: {
    flex: 1,
    flexDirection: "row",
    height: 380,
    width: 290,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  text: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    color: Color.Gray500,
  },
  delete:{
    position:'absolute',
    zIndex:2,
    top:24,
    right:20
  }
});
