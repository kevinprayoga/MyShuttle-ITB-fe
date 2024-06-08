import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, Image, Modal, StyleSheet} from "react-native";
import { images } from "../../../constants";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import {getToday, getFormatedDate} from "react-native-modern-datepicker";

export default function UserHome() {

  const today = new Date();

  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')

  const [open, setOpen] = useState(false) // bukatutupmodal
  const [date, setDate] = useState('2024/02/08') // date variable

  function handleOnPress (){
    setOpen(!open);
  }

  function handleChange (propDate){
    console.log(propDate);
    setDate(propDate);
  }

  return (
    <View>
      <Text className= "text-2xl top-20 ml-6 font-semibold">Selamat datang, Vania!</Text>
      <Text className= "text-lg top-24 ml-6 font-regular">Selamat pagi!</Text>

      <View className= "bg-white rounded-lg h-[280] w-[340] items-center ml-9 top-44">
        <Text className= "text-md top-4 font-regular text-left flex -ml-64">From</Text>
        <Text className= "text-lg top-8 font-semibold text-left flex -ml-56">Ganesha</Text>
        <View className= "bg-[#716C6C] rounded-lg h-[2] w-[120] -ml-[170] items-center top-9"></View>

        <TouchableOpacity>
            <View className="">
                <Image source={images.switchloc} className="h-7 w-7"/>
            </View>
        </TouchableOpacity>

        <Text className= "text-md font-regular text-left flex -mr-[275] -my-[7] -mt-12">To</Text>
        <Text className= "text-lg top-[7] font-semibold text-right -mr-56 mt-3">Jatinangor</Text>
        <View className= "bg-[#716C6C] rounded-lg h-[2] w-[120] -mr-[185] items-center top-[11]"></View>

        <Text className= "text-md top-12 font-regular text-left flex -ml-[230]">Pick Date</Text>
        <Text className= "text-lg top-14 font-semibold text-left flex -ml-36">Kamis, 02 Mei 2024</Text>
        <View className= "bg-[#716C6C] rounded-lg h-[2] w-[300] items-center top-14 ml-2"></View>

        <TouchableOpacity onPress={handleOnPress}>
            <View className="items-right ml-64 top-6">
                <Image source={images.calendar} className="h-7 w-7"/>
            </View>
        </TouchableOpacity>

        <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker onDateChange={handleChange} selected={date} minimumDate={startDate} mode="calendar"></DatePicker>
            </View>
          </View>

        </Modal>

        <TouchableOpacity>
            <View className="bg-[#2027DF] rounded-lg h-[50] w-[310] top-[80] items-center">
                <Text className= "text-white text-xl text-center font-bold mt-3">Search</Text>
            </View>
        </TouchableOpacity>
      </View>


    </View>

   
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }


})
