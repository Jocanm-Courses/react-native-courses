import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HomeWorkScreen} from './screens/homework-screen/HomeWorkScreen';

// LAST CLASS 68, HEIGHT, WIDTH porcentual y dimensiones de la pantalla

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <HelloWord /> */}
            {/* <BoxObjectModelPage /> */}
            {/* <DimensionsScreen /> */}
            {/* <PositionScreen /> */}
            {/* <FlexScreen /> */}
            <HomeWorkScreen />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
