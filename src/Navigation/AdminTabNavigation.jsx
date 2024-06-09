import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, View, Text } from 'react-native';
import { Entypo, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import UserHome from '../Tab/Admin/AdminHome';
import MapStacknavigation from './MapStackNavigation';
import Profile from '../Tab/Profile';

const Tab = createBottomTabNavigator();

export default function AdminTabNavigation() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#5A4DF3" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#5A4DF3",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarStyle: { 
            backgroundColor: "#5A4DF3", 
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20,
            paddingHorizontal: 10,
            height: 80,
            display: '',
          },
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="UserHome"
          component={UserHome}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={focused ? styles.focusedTab : styles.defaultTab}>
                <MaterialCommunityIcons name="home-analytics" size={size} color={focused ? "#5A4DF3" : "#FFFFFF"} />
                {focused && <Text style={styles.focusedText}>Home</Text>}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MapsNavigation"
          component={MapStacknavigation}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={focused ? styles.focusedTab : styles.defaultTab}>
                <MaterialCommunityIcons name="google-maps" size={size} color={focused ? "#5A4DF3" : "#FFFFFF"} />
                {focused && <Text style={styles.focusedText}>Maps</Text>}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={focused ? styles.focusedTab : styles.defaultTab}>
                <Ionicons name="person-circle-outline" size={size} color={focused ? "#5A4DF3" : "#FFFFFF"} />
                {focused && <Text style={styles.focusedText}>Profile</Text>}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = {
  focusedTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    height: 44,
  },
  defaultTab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    marginTop: 10,
  },
  focusedText: {
    color: '#5A4DF3',
    fontSize: 11,
    marginLeft: 5,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
};
