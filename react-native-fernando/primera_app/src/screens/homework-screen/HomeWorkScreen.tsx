import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeWorkScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cajaMorada: {
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
    },
    cajaNaranja: {
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        top: 50,
    },
    cajaAzul: {
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        width: 100,
        height: 100,
    },
});
