import { useEffect } from "react";
import { View, Text,StyleSheet, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../AppStore/Reducers/userSlice";
import { AppDispatch, RootState } from "../AppStore/store";
import { AuctionItem } from "../components/auction-item";
import { GlobalStyle, Color } from "../constent/color";
export const Home = ({navigation}:any) => {
  const dispatch=useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(getUser({email:"user2@gmail.com"}));
  },[])
  return (
    <View style={GlobalStyle.RootScreenContainer}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style={{ marginVertical: 14 }}>
          <AuctionItem />
        </View>
        <View style={{ marginVertical: 14 }}>
          <AuctionItem />
        </View>
        <View style={{ marginVertical: 14 }}>
          <AuctionItem />
        </View>
        <View style={{ marginVertical: 14 }}>
          <AuctionItem />
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
img:{height:440,
width:320, 
backgroundColor:'#fff'}
})