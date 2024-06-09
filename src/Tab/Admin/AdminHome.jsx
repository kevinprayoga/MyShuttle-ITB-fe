import React, { useState } from "react";
import { Text, View, Pressable, TextInput, ScrollView } from "react-native";

const PelanggaranContainer = ({ platMobil, kecepatan, tanggalHari, jam }) => {
    return (
        <View className="w-[327px] h-[85px] bg-blue-50 rounded-lg flex-row p-3 items-center mb-5">
            <View>
                <Text className="text-black text-lg font-bold leading-7">{platMobil}</Text>
                <Text className="text-black text-lg font-normal leading-7">{kecepatan}</Text>
            </View>
            <View className="px-10">
                <Text>{tanggalHari}</Text>
                <Text>{jam}</Text>
            </View>
        </View>
    );
};

const SearchForm = ({ searchQuery, setSearchQuery, handleSearch }) => {
    return (
        <View className="mb-4">
            <Text className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</Text>
            <View className="relative">
                <TextInput 
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    type="search" 
                    id="default-search" 
                    className="p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search Pelanggaran" 
                    required 
                />
                <Pressable 
                    onPress={handleSearch}
                    className="absolute right-2.5 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <Text className="text-white">Search</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default function PelanggaranAdmin() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredViolations, setFilteredViolations] = useState([]);

    const violations = [
        { platMobil: "B 1234 XYZ", kecepatan: "80 km/h", tanggalHari: "07 Jun 2024, Wed", jam: "14:30" },
        { platMobil: "B 1432 ABC", kecepatan: "90 km/h", tanggalHari: "08 Jun 2024, Thu", jam: "14:30" },
        { platMobil: "B 1108 DAC", kecepatan: "110 km/h", tanggalHari: "09 Jun 2024, Friday", jam: "14:30" },
        { platMobil: "B 1904 MOR", kecepatan: "75 km/h", tanggalHari: "09 Jun 2024, Friday", jam: "15:30" },
        { platMobil: "B 1908 SDA", kecepatan: "112 km/h", tanggalHari: "09 Jun 2024, Friday", jam: "17:30" },
    ];

    const handleSearch = () => {
        const filtered = violations.filter(violation =>
            violation.platMobil.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredViolations(filtered);
    };

    return (
        <View className="mx-6 mt-4">
            <Text className="text-2xl font-medium mb-4">List Pelanggaran</Text>
            <SearchForm 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
            />
            <ScrollView>
                {(filteredViolations.length > 0 ? filteredViolations : violations).map((violation, index) => (
                    <PelanggaranContainer 
                        key={index}
                        platMobil={violation.platMobil}
                        kecepatan={violation.kecepatan}
                        tanggalHari={violation.tanggalHari}
                        jam={violation.jam}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
