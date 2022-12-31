import React from 'react';
import {
    StyleProp,
    Text,
    TouchableNativeFeedback,
    View,
    ViewStyle,
    Platform,
} from 'react-native';
import FabStyles from './Fab.styles';
import {TouchableOpacity} from 'react-native';

interface Props {
    title?: string;
    position?: 'left' | 'right';
    children?: React.ReactNode;

    onPress?: () => void;
}

export const Fab = ({onPress, children, title, position = 'left'}: Props) => {
    const containerStyles: StyleProp<ViewStyle> =
        position === 'left'
            ? FabStyles.fabContainerLeft
            : FabStyles.fabContainerRight;

    const androidContent = (
        <View style={[FabStyles.fabContainer, containerStyles]}>
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple(
                    'purple',
                    false,
                    20,
                )}>
                <View style={[FabStyles.fab, FabStyles.fabShadow]}>
                    <Text style={FabStyles.fabText}>{children ?? title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );

    const iosContent = (
        <TouchableOpacity
            style={[FabStyles.fabContainer, containerStyles]}
            onPress={onPress}
            activeOpacity={0.7}>
            <View style={FabStyles.fab}>
                <Text style={FabStyles.fabText}>{children ?? title}</Text>
            </View>
        </TouchableOpacity>
    );

    return Platform.OS === 'android' ? androidContent : iosContent;
};
