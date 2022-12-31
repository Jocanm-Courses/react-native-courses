import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Fab} from '../../components/fab';
import styles from './HelloWorld.styles';

export const HelloWord = () => {
    const [counter, setCounter] = useState(0);

    const onIncrement = () => {
        setCounter(counter + 1);
    };

    const onDecrement = () => {
        setCounter(counter - 1);
    };

    return (
        <View style={styles.view}>
            <Text style={styles.text}>contador: {counter}</Text>
            <Fab onPress={onIncrement} position="right">
                +1
            </Fab>
            <Fab onPress={onDecrement}>-1</Fab>
        </View>
    );
};
