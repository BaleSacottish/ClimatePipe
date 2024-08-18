import { View, Text, SafeAreaView, Image, FlatList, Pressable, ScrollView, Alert, Button, PermissionsAndroid, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'



import globalStyles from '../../conntrans/globalStyle'
import colors from '../../conntrans/colors'

import MapView, { PROVIDER_GOOGLE,Marker, } from 'react-native-maps';

// MapboxGL.setAccessToken('pk.eyJ1IjoiYmFsZXBvb255YXBhdCIsImEiOiJjbHp4cDI2Z3QwZ3BtMmtwc2tzMXJzeTMxIn0.3hZIAavPddwI7bb6sf3euA');


const Mapiso = () => {

    const markers = [
        {
            id: '1',
            coordinate: { latitude: 14.8818, longitude: 102.0173},
            title: "Marker 1",
            description: "This is marker 1",
        },
        {
            id: '2',
            coordinate: { latitude: 14.8638, longitude: 102.03529},
            title: "Marker 2",
            description: "This is marker 2",
        },
    ];




    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{
                ...globalStyles.welcome_padding2
            }}>

                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 14.881474,
                        longitude: 102.015555,
                        latitudeDelta:  0.05,
                        longitudeDelta:  0.04,
                    }}
                >
                    {markers.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                    
                </MapView>







            </View>
        </SafeAreaView>
    )
}

export default Mapiso



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});