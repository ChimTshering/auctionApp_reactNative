import { useEffect, useState } from "react"
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { AuctionItem } from "../components/auction-item"
import { Chip } from "../components/author-chip";
import { HorizontalLine } from "../components/UI/HRLine";
import { Color, GlobalStyle } from "../constent/color";

import { FontAwesome5 } from "@expo/vector-icons";

export const ItemDetail = ({navigation}:any)=>{
  const [amount,setAmount] = useState('')
  useEffect(() => {
    navigation.setOptions({ title: "ITEM_TITLE", headerTintColor: "white" });
  }, []);

  const addAmount=()=>{
    navigation.goBack()
  }
  return (
    <View
      style={[
        GlobalStyle.RootScreenContainer,
        { backgroundColor: Color.Black500 },
      ]}
    >
      <View style={style.root}>
        <View style={style.scroll}>
          <ScrollView>
            <View>
              <AuctionItem />
            </View>
          </ScrollView>
        </View>
        <HorizontalLine color={Color.Gray500} />

        <View style={style.commentScroll}>
          <ScrollView>
            <Chip />
            <Chip />
            <Chip />
          </ScrollView>
          <HorizontalLine color={Color.Gray500} />

            <View style={[style.footer,style.inputWrapper]}>
              {amount.length?<Text style={{color:Color.Gray300}}>{'\u0024'}</Text>:null}
              <TextInput
                placeholder={`Enter (${'\u0024'}) more than 'TOP' ammount`}
                style={style.input}
                placeholderTextColor={Color.Gray300}
                value={amount}
                onChangeText={(input)=>setAmount(input)} keyboardType='decimal-pad'
              />
              {amount.length?<Pressable style={({pressed})=>[style.pressable,pressed&&{opacity:0.5}]} onPress={addAmount}>
                <FontAwesome5
                  name="location-arrow"
                  size={24}
                  color={Color.Aqua500}
                />
              </Pressable>:null}
            </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  root: {
    flex: 1,
    margin:0,
  },
  scroll: {
    flex: 3,
    margin:0
    // flexGrow:1
    // height:'100%'
  },
  commentScroll: {
    flex: 2,
    margin:0,
    padding:0
  },
  footer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginHorizontal:14
 },
 input:{
  color:Color.White500,
  // fontWeight:'bold',
 },
 inputWrapper:{
  borderRadius:25,
  backgroundColor:Color.Gray500,
  paddingHorizontal:14,
  paddingVertical:4
 },
 pressable:{
  marginLeft:8
 }
});