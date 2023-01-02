import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hola</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'red',
        borderWidth: 10,
        padding: 10,
    },
});
