import React, { useEffect, useState } from "react";
import { Text, Pressable, View, SafeAreaView, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";

const TanggalContainer = ({ tanggal }) => {
    return (
        <View className="py-2 border border-solid bg-white rounded-lg mb-5 mx-4">
            <Text className="text-base text-center">{tanggal}</Text>
        </View>
    );
}

const ReservasiJamContainer = ({ from, dest, departureTime, arrivalTime, sisa, onPress }) => {
    const formattedDepartureTime = moment(departureTime).format('HH:mm');
    const formattedArrivalTime = moment(arrivalTime).format('HH:mm');

    return (
        <Pressable onPress={onPress}>
            <View className="bg-white rounded-lg flex-row py-3 px-4 items-center mb-5 mx-4 shadow">
                <View className="flex-1 mr-4">
                    <Text className="text-gray-600">From</Text>
                    <Text className="text-black text-lg font-bold leading-7">{from}</Text>
                    <Text className="text-black text-lg font-normal leading-7">{formattedDepartureTime}</Text>
                </View>
                <View className="flex-1">
                    <Text className="text-gray-600">To</Text>
                    <Text className="text-blue-700 text-lg font-bold">{dest}</Text>
                    <Text className="text-lg">{formattedArrivalTime}</Text>
                </View>
                <View className="ml-auto">
                    <View className="p-1 rounded w-[49px] bg-blue-200 items-center">
                        <Text className="text-blue-700 font-bold text-xl">{sisa}</Text>
                        <Text className="text-blue-700">sisa</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default function ReservasiJam() {
    const navigation = useNavigation();
    const route = useRoute();
    const { schedules, date } = route.params;
    const [allSchedule, setAllSchedule] = useState(schedules);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [shuttleCapacities, setShuttleCapacities] = useState({});

    const fetchShuttleData = async (scheduleId) => {
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_PORT}/schedule/${scheduleId}/shuttle`);
            const result = await response.json();
            if (response.ok) {
                setShuttleCapacities((prev) => ({
                    ...prev,
                    [scheduleId]: result.data[0]?.capacity || 'N/A',
                }));
            } else {
                setError(result.message || 'Error fetching shuttle data');
            }
        } catch (error) {
            console.error('Error fetching shuttle data:', error);
            setError('Error fetching shuttle data');
        }
    };

    useEffect(() => {
        allSchedule.forEach(schedule => {
            fetchShuttleData(schedule.scheduleId);
        });
    }, [allSchedule]);

    const handlePress = (scheduleId, shuttleId) => {
        navigation.navigate('Reservasi', { scheduleId, shuttleId });
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                <TanggalContainer tanggal={date} /> 
                {allSchedule.map((schedule, index) => (
                    <ReservasiJamContainer
                        key={index}
                        from={schedule.location}
                        dest={schedule.destination}
                        departureTime={schedule.startTime}
                        arrivalTime={schedule.endTime}
                        sisa={shuttleCapacities[schedule.scheduleId] || 'N/A'}
                        onPress={() => handlePress(schedule.scheduleId, schedule.shuttleId)}
                    />
                ))}
            </ScrollView>
            {loading && <Text className="text-center mt-4">Loading...</Text>}
            {error && <Text className="text-center mt-4 text-red-500">{error}</Text>}
        </SafeAreaView>
    );
}
