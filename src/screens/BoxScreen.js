import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
};

const styles = StyleSheet.create({
    textOneStyle: {
        fontSize: 30,
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        fontSize: 30,
        borderWidth: 3,
        borderColor: 'red',
        position: 'absolute'
    },
    textThreeStyle: {
        fontSize: 30,
        borderWidth: 3,
        borderColor: 'red',
    },
    
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    }
});

export default BoxScreen;