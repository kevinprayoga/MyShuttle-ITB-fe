import React, { useState } from "react";
import { Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import { images } from "../../../constants";

export default function BarcodeScanner({ navigation }) {
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);

  const onBarCodeRead = (e) => {
    alert(`Barcode: ${e.data}`);
  };

  return (
    <View className="flex-1 bg-white items-center">
      <TouchableOpacity className="absolute top-10 left-5 z-10" onPress={() => navigation.goBack()}>
        <Text className="text-2xl">←</Text>
      </TouchableOpacity>
      <Text className="text-2xl font-medium mt-12">Scan QR Code</Text>
      <Text className="text-base mt-4 mb-4">Please scan QR Code</Text>
      <RNCamera
        className="w-[90%] h-[50%] justify-center items-center mb-20"
        onBarCodeRead={onBarCodeRead}
        flashMode={flash}
        captureAudio={false}
      >
        <View className="flex-1 items-center justify-center">
          <View className="h-64 w-64 border-2 border-black rounded-lg" />
        </View>
      </RNCamera>
      <View className="flex-row mt-5 justify-center mb-20">
        <TouchableOpacity className="mx-3 bg-blue-500 rounded-full p-4">
          <Image source={images.gallery} className="w-6 h-6 tint-white" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mx-3 bg-blue-500 rounded-full p-4"
          onPress={() => setFlash(
            flash === RNCamera.Constants.FlashMode.off
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          )}
        >
          <Image source={images.flash} className="w-6 h-6 tint-white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
