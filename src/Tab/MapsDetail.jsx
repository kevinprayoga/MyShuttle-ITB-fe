import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';

export default function DetailMaps({ route, navigation }) {
  const { coordinates } = route.params;
  const [currentLocation, setCurrentLocation] = useState(coordinates[0]);
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocationIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % coordinates.length;
        setCurrentLocation(coordinates[newIndex]);
        return newIndex;
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [coordinates]);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={currentLocation}
          title="Lokasi Shuttle"
        />
      </MapView>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Lokasi Shuttle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    zIndex: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
