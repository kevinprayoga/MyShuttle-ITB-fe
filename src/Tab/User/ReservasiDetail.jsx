import React, { useState, useEffect } from "react";
import { Text, Pressable, View, Image } from "react-native";
import { TanggalContainer, ReservasiInfoContainer } from './Reservasi';
import dummy_qr from '../../../assets/images/dummy_qr.png';
import QRCodeSVG from 'react-native-qrcode-svg';
import { useNavigation } from "@react-navigation/native";

{/*
    STEP KE-3 DARI RESERVASI
    Figma Frame Name: Detail Reservasi
 */}

function ReservationQR() {
    const [reservationData, setReservationData] = useState({
        from: 'Ganesha',
        dest: 'Jatinangor',
        departureTime: '19.00',
        arrivalTime: '21.00',
        nomorShuttle: '10',
        platMobil: 'D 8234 X',
    });
    const [tanggal, setTanggal] = useState('Senin, 3 Mei 2024');
  
    useEffect(() => {
    // SIMULATE FETCHING DATA
        const fetchData = async () => {
        // DATA FETCHING LOGIC HERE
            setReservationData({
                // REPLACE WITH FETCHED DATA HERE
                from: 'Ganesha', 
                dest: 'Jatinangor',
                departureTime: '07.00',
                arrivalTime: '08.00',
                nomorShuttle: '9',
                platMobil: 'D 8234 X',
                // Idealnya ini juga nambah ID reservasi gitu, kayak kalo misalnya maks 10 kursi berarti ini ID = 1, dsb.
                // Tapi ngikut struktur backendnya gimana.
            });
            setTanggal('Senin, 3 Mei 2024'); // REPLACE WITH FETCHED DATA
        };
      fetchData();
    }, []);

    const removeExtraSpaces = (text) => {
        // Replace "%0A " with an empty string to remove newline and extra spaces
        return text.replace(/%0A\s+/g, '');
    };
  
    const reservationText = `
        scheduleId: 'S5TZ5eRQ35KdPxDUMnvW',
    `;

    const cleanReservationText = removeExtraSpaces(reservationText);
  
    return (
      <View className="items-center mb-5">
        <QRCodeSVG
          value={cleanReservationText}
          size={192} // Adjust size as needed
          color="black" // Optional color for the QR code
        />
      </View>  
    );
};

export default function ReservasiDetail() {
    const nav = useNavigation();
    return (
        <View className="mx-6 mt-4">
            <TanggalContainer tanggal="Senin, 3 Mei 2024"/>
            {/* Reservasi Info sama kayak yang dari page Reservasi.jsx */}
            <ReservasiInfoContainer
                // REPLACE DATA HERE AS NEEDED
                from="Ganesha"
                dest="Jatinangor"
                departureTime="19.00"
                arrivalTime="21.00"
                nomorShuttle="10"
                platMobil="D 8234 X"
            />
            <ReservationQR />
            <Pressable onPress={() => nav} className="bg-blue-600 px-8 py-3 rounded-lg mb-4">
                <Text className="text-white text-lg text-center font-medium">Kembali ke Beranda</Text>
            </Pressable>
        </View>
    );
};