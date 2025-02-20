import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return <View style={styles.parentStyle}>
        <View style={styles.boxOneStyle}></View>
        <View style={styles.boxTwoStyle}></View>
        <View style={styles.boxThreeStyle}></View>
    </View>
};

const styles = StyleSheet.create({
    boxOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    boxTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginTop:100
    },
    boxThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        right: 0,
    },
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default BoxScreen;