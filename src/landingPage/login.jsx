import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { images } from "../../constants";
import useStore from '../context/store';

export default function Login() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State untuk visibilitas password
  const [submitPressed, setSubmitPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const nav = useNavigation();

  const setUserId = useStore(state => state.setUserId);

  const backHandler = () => {
    nav.navigate("Landing");
    setSubmitPressed(false);
  };

  const onSignInPress = async () => {
    setSubmitPressed(true);
    setErrorMessage('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailAddress, password);
      const user = userCredential.user;
      setUserId(user?.uid);
      console.log("User is signed in:", user?.uid);
      setSubmitPressed(false);
    } catch (err) {
      console.log(err);
      setErrorMessage('Email atau password salah');
    }
  };

  const getInputStyle = (inputValue) => {
    return inputValue || !submitPressed
      ? "bg-gray-200 rounded-lg px-2 h-14 mx-4 mt-6"
      : "bg-gray-200 rounded-lg px-2 h-14 mx-4 mt-6 border-2 border-red-500";
  };

  const getInputPWStyle = (inputValue) => {
    return inputValue || !submitPressed
      ? "bg-gray-200 rounded-lg px-2 h-14 mx-4 mt-6 flex-row items-center"
      : "bg-gray-200 rounded-lg px-2 h-14 mx-4 mt-6 flex-row items-center border-2 border-red-500";
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView className="bg-white" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="bg-white h-screen">
          <View className="flex h-screen">
            <ScrollView className="flex mx-8 mt-20">
              <View className="flex-row">
                <TouchableOpacity title="Back" onPress={backHandler} className="rounded-full p-1.5 bg-primary">
                  <Ionicons name="arrow-back" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <View className="flex items-center">
                <Image source={images.logo} className="w-40 h-40 mt-7" />
              </View>
              {errorMessage ? (
                  <Text className="font-r text-red-500 mt-8">{errorMessage}</Text>
              ) : null}
              <View className="flex mt-2">
                <View className={getInputStyle(emailAddress)}>
                  <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#9CA3AF" 
                    value={emailAddress}
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                    className="mx-3 font-p text-base text-smallFont rounded-lg h-14" 
                    inputMode="email" 
                    autoCapitalize="none"
                    autoFocus
                  />
                </View>
                <View className={getInputPWStyle(password)}>
                  <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="#9CA3AF"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    className="mx-3 font-p text-base text-smallFont rounded-lg h-14 flex-1" 
                    autoCapitalize="none" 
                    secureTextEntry={!passwordVisible} // Control visibilitas password
                  />
                  <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} className="mr-1">
                    <Feather name={passwordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={onSignInPress} className="bg-primary mx-4 mt-8 py-4 rounded-lg shadow shadow-[#3A8DEC]">
                  <Text className="font-s text-xl text-white font-semibold text-center">Login</Text>
                </TouchableOpacity>
              </View>
              <Text className="font-s text-vSmallFont text-small mt-3 text-center font-semibold">Haven't register yet?
                <Text onPress={() => (nav.navigate("Register"))} className="text-primary font-semibold"> Register account</Text>
              </Text>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}