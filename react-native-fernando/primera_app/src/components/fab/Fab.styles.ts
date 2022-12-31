import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    fab: {
        backgroundColor: '#585656',
        width: 40,
        height: 40,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    fabContainerRight: {
        right: 20,
    },
    fabContainerLeft: {
        left: 20,
    },
    fabContainer: {
        position: 'absolute',
        bottom: 20,
    },
});
