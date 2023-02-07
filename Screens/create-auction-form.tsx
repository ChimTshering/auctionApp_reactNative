import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Platform,
} from "react-native";
import { Color, GlobalStyle } from "../constent/color";
import * as ImagePicker from "expo-image-picker";

import { HorizontalLine } from "../components/UI/HRLine";
import { InputText } from "../components/UI/text-input";
import { ImageSlider } from "../components/ImageSlider";
import { useCallback, useState } from "react";
import { MediaTypeOptions } from "expo-image-picker";
import { current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../AppStore/store";
import {v4} from 'uuid'

export const AuctionForm = ({navigation}:any) => {
  const auction_id = v4()
  const [value, setValue] = useState({
    item_name: "",
    item_location: "",
    min_price: "",
    due_time: "",
    description: "",
  });
  const [imageUri, setImage] = useState<string[]>([]);
  const [imageBase64, setImageBase64] = useState<(string | null | undefined)[]>(
    []
  );
  const dispatch = useDispatch<AppDispatch>();

  const addImage = useCallback(async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: MediaTypeOptions.Images,
      base64: true,
      allowsMultipleSelection:false,
      aspect:[5,7]
    });
    if (!res.canceled) {
      setImage((current) => [res.assets[0].uri, ...current]);
      setImageBase64((current)=>[res.assets[0].base64,...current])
      console.log(res)
    }
  }, [imageUri]);
  const CreateAuction = () => {
    const payload = {
      ...value,
      images: imageUri,
      user_name: "chimi",
      email: "chimi@gmail.com",
    };
    if (payload) {
      // dispatch(createAuction(payload));
      navigation.navigate("Listing")
    }
  };
  console.log(imageBase64)
  return (
    <View style={[GlobalStyle.RootScreenContainer, style.root]}>
      <View style={style.scroll}>
        <View>
          <Text style={style.title}>Add Auction Detail</Text>
          <HorizontalLine />
        </View>
        <ScrollView>
          <SafeAreaView>
            <InputText
              label="Item Name"
              textChange={(text) =>
                setValue((current) => {
                  return { ...current, item_name: text };
                })
              }
              value={value.item_name}
            />
            <InputText
              label="Location"
              textChange={(text) =>
                setValue((current) => {
                  return { ...current, item_location: text };
                })
              }
              value={value.item_location}
            />
            <ImageSlider imgUri={imageUri} setImgUri={setImage} rootStyle={{borderRadius:8}} editingMode/>
            <View style={style.addBtn}>
              <Button
                title="Add Image(s)"
                color={Color.Aqua500}
                onPress={addImage}
              />
            </View>
            <InputText
              label="Minimum Price($)"
              textChange={(text) =>
                setValue((current) => {
                  return { ...current, min_price: text };
                })
              }
              value={value.min_price}
              keyType="numeric"
              placeholder="%00.00"
            />
            <InputText
              label="Due Time(hrs)"
              textChange={(text) =>
                setValue((current) => {
                  return { ...current, due_time: text };
                })
              }
              value={value.due_time}
              keyType="numeric"
              placeholder="Due time in hour(s)"
            />
            <InputText
              label="Description"
              textChange={(text) =>
                setValue((current) => {
                  return { ...current, description: text };
                })
              }
              value={value.description}
              textAlign="top"
              multiline
            />
            <View style={style.createBtn}>
              <Button
                title="Create Auction"
                color={Color.Aqua500}
                onPress={CreateAuction}
              />
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
    height: undefined,
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
    marginTop: 12,
  },
});
