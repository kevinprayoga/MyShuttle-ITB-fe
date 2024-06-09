import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "./hooks/animation";

import Landing from './src/LandingPage/Landing';
import Login from './src/LandingPage/Login';
import Register from './src/LandingPage/Register';
import UserTabNavigation from "./src/Navigation/UserTabNavigation";
import AdminTabNavigation from "./src/Navigation/AdminTabNavigation";
import SupirStackNavigation from "./src/Navigation/SupirStackNavigation";

import { useEffect, useState } from "react";

import useStore from './src/context/store';

const Stack = createNativeStackNavigator();

const fetchRoleUserData = async (userId) => {

};

const SignedInNavigator = () => {
  const userId = useStore(state => state.userId);
  const nav = useNavigation();
  const [role, setRole] = useState('');
  useEffect(() => {
    async function roleUser() {
      setRole(await fetchRoleUserData(userId));
      // if (role === "admin") {
      //   nav.navigate("TabAdmin");
      // } 
      // if (role === "supir"){
      //   nav.navigate("StackSupir");
      // }
      if (role === "user"){
        nav.navigate("TabUser");
      }
    }
    roleUser();
  }, [userId]);

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
      }}
      headerMode="float"
      animation="fade"
    >
      {/* <Stack.Screen
        name="TabAdmin"
        component={AdminTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StackSupir"
        component={SupirStackNavigation}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="TabUser"
        component={UserTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
};

const SignedOutNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
      }}
      headerMode="float"
      animation="fade"
    >
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
};

export default function App() {
  const userId = useStore(state => state.userId);
  
  useEffect(() => {
    console.log('user:', userId);
  }, [userId]);

  return (
    <NavigationContainer>
      {userId ? <SignedInNavigator /> : <SignedOutNavigator />}
    </NavigationContainer>
  );
};
