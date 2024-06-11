import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { config, closeConfig } from "./hooks/animation";

import Landing from './src/landingPage/Landing';
import Login from './src/landingPage/login';
import Register from './src/landingPage/register';
import UserTabNavigation from "./src/Navigation/UserTabNavigation";
import AdminTabNavigation from "./src/Navigation/AdminTabNavigation";
import SupirStackNavigation from "./src/Navigation/SupirStackNavigation";

import { useEffect, useState } from "react";

import useStore from './src/context/store';

const Stack = createNativeStackNavigator();

const fetchRoleUserData = async (userId) => {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_PORT}/user/${userId}`);
    const data = await response.json();
    console.log('data: ', data);
    return data.data[0].role; // Accessing the role correctly
  } catch (error) {
    console.error('error: ', error);
  }
};

const SignedInNavigator = () => {
  const userId = useStore(state => state.userId);
  const nav = useNavigation();
  const [role, setRole] = useState('');

  useEffect(() => {
    const roleUser = async () => {
      const fetchedRole = await fetchRoleUserData(userId);
      setRole(fetchedRole);
      console.log('role: ', fetchedRole);

      if (fetchedRole === "admin") {
        nav.navigate("TabAdmin");
      } 
      if (fetchedRole === "supir") {
        nav.navigate("StackSupir");
      }
      if (fetchedRole === "user") {
        nav.navigate("TabUser");
      }
    };

    if (userId) {
      roleUser();
    }
  }, [userId, nav]);

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
        name="TabAdmin"
        component={AdminTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StackSupir"
        component={SupirStackNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabUser"
        component={UserTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
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
  );
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
