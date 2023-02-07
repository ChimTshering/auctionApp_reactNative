import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import Ionicon from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons"; 

import {Home} from '../Screens/Home'
import { WinnerList } from "../Screens/winners";
import { Color } from '../constent/color';
import * as NavigationBar from "expo-navigation-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../Screens/signIn';
import { RightButton } from '../components/RightButton';
import { SignUp } from '../Screens/SignUp';
import { AuctionForm } from '../Screens/create-auction-form';
import { useSelector } from "react-redux";
import { RootState } from "../AppStore/store";
import { ItemDetail } from "../Screens/item-detail";

NavigationBar.setBackgroundColorAsync("#222831");

const Tabs = createBottomTabNavigator();
const Stacks = createNativeStackNavigator();

export default function Routes(){

  return (
    <NavigationContainer>
      <Stacks.Navigator
        initialRouteName="Listing"
        screenOptions={{
          headerStyle: { backgroundColor: Color.Black500 },
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          headerBackButtonMenuEnabled: false,
        }}
      >
        <Stacks.Screen
          name="Listing"
          component={Listing}
          options={{ headerShown: false }}
        />
        <Stacks.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stacks.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stacks.Screen
          name="CreateAuction"
          component={AuctionForm}
          options={{ title: "Create your Auction", headerTintColor: "white" }}
        />
        <Stacks.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={{ title: "Create your Auction", headerTintColor: "white" }}
        />
      </Stacks.Navigator>
    </NavigationContainer>
  );

}

const  Listing = () => {
  const token = useSelector((state:RootState)=>state.User.token)

  return (
    <Tabs.Navigator
      screenOptions={({ navigation }) => ({
        // tabBarActiveBackgroundColor: Color.Gray500,
        tabBarActiveTintColor: Color.Aqua500,
        tabBarStyle: {
          backgroundColor: Color.Black500,
          margin: 0,
          borderWidth: 0,
        },
        headerStyle: { backgroundColor: Color.Black500 },
        headerTitleStyle: {
          color: "white",
          fontSize: 14,
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        tabBarInactiveTintColor: "white",
        headerRight: () => (
          <RightButton
            BtnLabel={token?.length?'Add Auction': "Log In"}
            onPress={() =>
              navigation.navigate(token?.length?"CreateAuction":"SignIn")
            }
          />
        ),
      })}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicon
              name={focused ? "list" : "list-outline"}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "All Item",
          headerTitleAlign: "center",
          headerTitle: "All Auction Items",
        }}
      />
      <Tabs.Screen
        name="Winner"
        component={WinnerList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicon
              name={focused ? "star" : "star-outline"}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Winner",
          headerTitleAlign: "center",
          headerTitle: "All Auction Items and Owner",
        }}
      />
      {token?.length? <Tabs.Screen
        name="YourCreation"
        component={WinnerList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name={"person-pin-circle"}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Your Item",
          headerTitleAlign: "center",
          headerTitle: "All Your Auction Item List",
        }}
      />:null}
    </Tabs.Navigator>
  );
}
