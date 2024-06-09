import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { images } from "../../../constants";

export default function Scan() {
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useNavigation();
  const [schedule, setScheduleData] = useState([]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center">We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    console.log(`Scanned data: ${data}`);

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_PORT}/schedule/${data}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const scheduleData = await response.json();
        console.log('Schedule data:', scheduleData);
        setScheduleData(scheduleData);
        setTimeout(() => navigation.navigate('ScanResult', { success: true, data: scheduleData }), 100);

      } else {
        console.error('Error fetching schedule data:', await response.json());
        navigation.navigate('ScanResult', { success: false });
      }
    } catch (error) {
      console.error("Error fetching schedule data: ", error);
      navigation.navigate('ScanResult', { success: false });
    }
  };

  return (
    <View className="flex-1 bg-white items-center">
      <TouchableOpacity className="absolute top-10 left-5 z-10" onPress={() => navigation.goBack()}>
        <Text className="text-2xl">←</Text>
      </TouchableOpacity>
      <Text className="text-2xl font-medium mt-12">Scan QR Code</Text>
      <Text className="text-base mt-4 mb-4">Please scan QR Code</Text>
      <CameraView
        className="w-[90%] h-[50%] justify-center items-center mb-20"
        onBarcodeScanned={handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        <View className="flex-1 items-center justify-center">
          <View className="h-64 w-64 border-2 border-black rounded-lg" />
        </View>
      </CameraView>
      <View className="flex-row mt-5 justify-center mb-20">
        <TouchableOpacity className="mx-3 bg-blue-500 rounded-full p-4">
          <Image source={images.gallery} className="w-6 h-6 tint-white" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-3 bg-blue-500 rounded-full p-4">
          <Image source={images.flash} className="w-3 h-6 tint-white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
