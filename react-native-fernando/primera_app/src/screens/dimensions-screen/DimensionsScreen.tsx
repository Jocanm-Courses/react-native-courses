import React from 'react';
import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';

// const {fontScale} = Dimensions.get('window');

export const DimensionsScreen = () => {
    const {width, height} = useWindowDimensions();

    return (
        <View style={styles.container}>
            {/* <View style={styles.cajaMorada} /> */}
            <View style={{...styles.cajaNaranja, height: height * 1}} />
            <Text style={styles.title}>
                W: {width}, H: {height}
            </Text>
            {/* <Text>Dimensions Screen</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '70%',
    },
    cajaMorada: {
        width: '50%',
        height: '50%',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: '50%',
        height: '50%',
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
});
