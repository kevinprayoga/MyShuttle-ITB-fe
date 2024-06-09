import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from '@expo/vector-icons';
import { images } from "../../constants";

import { auth } from "../../config/firebaseConfig";
import useStore from '../context/store';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [fullname, setFullname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [submitPressed, setSubmitPressed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const setUserId = useStore(state => state.setUserId);

  const nav = useNavigation();

  const backHandler = () => {
    nav.navigate("Landing");
    setSubmitPressed(false);
    setErrorMessage('');
  };

  const onSignUpPress = async () => {
    setSubmitPressed(true);
    setErrorMessage('');

    if (!fullname || !emailAddress || !password) {
      setErrorMessage('Semua field harus diisi');
      return;
    }

    if (!emailAddress.endsWith('@gmail.com')) {
      setErrorMessage('Email harus menggunakan @gmail.com');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password harus memiliki setidaknya 8 karakter');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailAddress, password);
      const user = userCredential.user;
      setUserId(user?.uid);
      console.log("Creating sign up");

      const payload = {
        userId: user?.uid,
        fullname: fullname,
        email: emailAddress,
        phoneNumber: phoneNumber,
        role: "user",
      };
      console.log("Payload:", payload);

      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_PORT}/user`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      if (response.ok) {
        setSubmitPressed(false);
        console.log("User registered saved!");
        const responseData = await response.json();
        console.log('Response data:', responseData);
      } else {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        setErrorMessage('Gagal membuat akun');
      }
      setSubmitPressed(false);
    } catch (error) {
      console.error("Error during sign up: ", error);
      setErrorMessage('Terjadi kesalahan saat mendaftar.');
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
              <Image source={images.register} className="w-96 h-96 mt-7" />
              <View className="flex -mt-20">
                {errorMessage ? (
                  <Text className="font-r text-red-500 ">{errorMessage}</Text>
                ) : null}
                <View className={getInputStyle(fullname)}>
                  <TextInput 
                    placeholder="Fullname" 
                    placeholderTextColor="#9CA3AF"
                    value={fullname}
                    onChangeText={(fullname) => setFullname(fullname)}
                    className="mx-3 font-p text-base text-smallFont rounded-lg h-14" 
                    autoFocus
                  />
                </View>
                <View className={getInputStyle(emailAddress)}>
                  <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#9CA3AF" 
                    value={emailAddress}
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                    className="mx-3 font-p text-base text-smallFont rounded-lg h-14" 
                    inputMode="email" 
                    autoCapitalize="none"
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
                <View className={getInputStyle(phoneNumber)}>
                  <TextInput 
                    placeholder="Phone Number"
                    placeholderTextColor="#9CA3AF" 
                    value={phoneNumber}
                    onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                    className="mx-3 font-p text-base text-smallFont rounded-lg h-14" 
                    autoCapitalize="none"
                  />
                </View>
              </View>
              <TouchableOpacity onPress={onSignUpPress} className="bg-primary mx-4 mt-8 py-4 rounded-lg shadow shadow-[#3A8DEC] mb-20">
                <Text className="font-s text-xl text-white font-semibold text-center">Register</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}