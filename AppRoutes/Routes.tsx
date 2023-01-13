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

NavigationBar.setBackgroundColorAsync("#222831");

const Tabs = createBottomTabNavigator();
const Stacks = createNativeStackNavigator();

export default function Routes(){

  return (
    <NavigationContainer>
      <Stacks.Navigator
        initialRouteName="CreateAuction"
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
      </Stacks.Navigator>
    </NavigationContainer>
  );

}

const  Listing = () => {
  // const isLoggedIn = useSelector((state:RootState)=>state.Auth.user_id)

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
        // tabBarLabelStyle: { fontSize: 12 },
        tabBarInactiveTintColor: "white",
        headerRight: () => (
          <RightButton
            BtnLabel={"Create"}
            onPress={() =>
              navigation.navigate("CreateAuction")
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
        name="ActiveAuction"
        component={WinnerList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "calendar-clock" : "calendar-clock-outline"}
              color={color}
              size={size}
            />
          ),
          tabBarLabel: "Active",
          headerTitleAlign: "center",
          headerTitle: "All Active Auction",
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
      <Tabs.Screen
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
      />
    </Tabs.Navigator>
  );
}
