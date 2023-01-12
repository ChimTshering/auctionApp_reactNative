import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { Color, GlobalStyle } from "../constent/color";
import * as ImagePicker from 'expo-image-picker'

import { HorizontalLine } from "../components/UI/HRLine";
import { InputText } from "../components/UI/text-input";
import { ImageSlider } from "../components/ImageSlider";
import { useCallback, useState } from "react";
import { MediaTypeOptions } from "expo-image-picker";

export const AuctionForm = () => {
  const [value, setValue] = useState("");
  const [imageUri, setImage] = useState<string []>([]);
  const addImage = useCallback(async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: MediaTypeOptions.Images,
      base64:true
    });
    console.log(res)
    if(!res.canceled){
      console.log(res)
      setImage((current)=>[res.assets[0].uri,...current])
    }
  }, [imageUri]);
  console.log(imageUri);
  return (
    <View style={[GlobalStyle.RootScreenContainer, style.root]}>
      <View style={style.scroll}>
        <View>
          <Text style={style.title}>Add Auction Detail</Text>
          <HorizontalLine />
        </View>
        <ScrollView>
          <SafeAreaView>
            <InputText label="Item Name" textChange={() => {}} value="" />
            <InputText label="Location" textChange={() => {}} value="" />
            <ImageSlider  imgUri={imageUri} setImgUri={setImage}/>
            <View style={style.addBtn}>
              <Button
                title="Add Image(s)"
                color={Color.Aqua500}
                onPress={addImage}
              />
            </View>
            <InputText
              label="Minimum Price($)"
              textChange={() => {}}
              value=""
              keyType="numeric"
            />
            <InputText
              label="Description"
              textChange={(text) => setValue(text)}
              value={value}
              textAlign="top"
              multiline
            />
            <View style={style.createBtn}>
              <Button title="Create Auction" color={Color.Aqua500} />
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    backgroundColor: Color.Black500,
    padding: 8,
    borderRadius: 12,
    width: "100%",
    height: "95%",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  addBtn: {
    width: "40%",
    alignSelf: "center",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 4,
  },
  createBtn: {
    width: "60%",
    alignSelf: "center",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 32,
    marginTop:12
  },

});
