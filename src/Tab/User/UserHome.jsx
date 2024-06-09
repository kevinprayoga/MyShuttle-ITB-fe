import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, Modal, ScrollView } from "react-native";
import { images } from "../../../constants";
import DatePicker, { getToday, getFormatedDate } from "react-native-modern-datepicker";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import useStore from '../../context/store';

export default function UserHome() {
  const navigation = useNavigation();
  const today = moment();
  const startDate = today.add(1, 'days').format('YYYY-MM-DD');
  const [name, setName] = useState('');
  const userId = useStore(state => state.userId);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [fromLocation, setFromLocation] = useState('Ganesha');
  const [toLocation, setToLocation] = useState('Jatinangor');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchData();
  }, [userId]);

  useEffect(() => {
    console.log('Schedules:', schedules);
  }, [schedules]);

  const handleOnPress = () => {
    setOpen(!open);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_PORT}/user/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }
      const result = await response.json();
      setName(result.data[0].fullname);
    } catch (error) {
      console.error('error: ', error);
    }
  };

  const handleChange = (propDate) => {
    setDate(moment(propDate, 'YYYY-MM-DD').format('YYYY-MM-DD'));
  };

  const switchLocations = () => {
    setFromLocation((prevFromLocation) => {
      setToLocation(fromLocation);
      return toLocation;
    });
  };

  const searchSchedules = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_PORT}/schedule?location=${fromLocation}&destination=${toLocation}&departure=${date}`);
      const result = await response.json();
      if (response.ok) {
        if (result.data.length === 0) {
          setError('No schedules found');
          setLoading(false);
          return;
        }
        setSchedules(result.data);
        // Tunggu hingga state `schedules` diperbarui
        setTimeout(() => {
          navigation.navigate('ReservasiJam', { schedules: result.data, date });
        }, 100);
      } else {
        setError(result.message || 'Error fetching schedules');
      }
    } catch (err) {
      console.error('Error fetching schedules:', err);
      setError('Error fetching schedules');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-100 pt-12">
      <Text className="text-2xl font-semibold ml-6 mt-4">Selamat datang, {name}!</Text>
      <Text className="text-lg ml-6 mt-2">Semangat pagi!</Text>
      <View className="bg-white rounded-lg p-6 mx-6 mt-12 shadow-lg">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-md">From</Text>
            <Text className="text-lg font-semibold mt-1">{fromLocation}</Text>
            <View className="bg-gray-600 h-0.5 w-24 my-3"></View>
          </View>
          <TouchableOpacity onPress={switchLocations}>
            <Image source={images.switchloc} className="h-7 w-7 mt-6" />
          </TouchableOpacity>
          <View>
            <Text className="text-md">To</Text>
            <Text className="text-lg font-semibold mt-1">{toLocation}</Text>
            <View className="bg-gray-600 h-0.5 w-24 my-3"></View>
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-6">
          <View className="flex-1">
            <Text className="text-md">Pick Date</Text>
            <Text className="text-lg font-semibold mt-1">{moment(date).format('dddd, DD MMM YYYY')}</Text>
            <View className="bg-gray-600 h-0.5 w-full my-3"></View>
          </View>
          <TouchableOpacity onPress={handleOnPress} className="ml-4">
            <Image source={images.calendar} className="h-7 w-7" />
          </TouchableOpacity>
        </View>

        <Modal animationType="slide" transparent={true} visible={open}>
          <View className="flex-1 justify-center items-center">
            <View className="bg-white rounded-2xl p-8 shadow-lg w-11/12">
              <DatePicker
                onSelectedChange={handleChange}
                current={date}
                selected={date}
                minimumDate={startDate}
                mode="calendar"
                options={{
                  mainColor: '#2027DF',
                }}
              />
              <TouchableOpacity onPress={handleOnPress} className="bg-blue-500 rounded-md py-2 mt-4 w-full">
                <Text className="text-white text-center">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={searchSchedules} className="bg-blue-700 rounded-lg h-12 mt-20 items-center justify-center">
          <Text className="text-white text-xl font-bold">Search</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text className="text-center mt-4">Loading...</Text>
      ) : error ? (
        <Text className="text-center mt-4 text-red-500">{error}</Text>
      ) : null}
    </View>
  );
}
