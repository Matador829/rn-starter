import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [currentName, setName] = useState("");
    const [currentPassword, setPassword] = useState("");

    return (
        <View>
            <Text style={styles.text}>Enter Name:</Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none" 
            autoCorrect={false} 
            value={currentName}
            onChangeText={(newValue) => setName(newValue)}
            placeholder="Name"
            />
            <Text style={styles.text}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={currentPassword}
                onChangeText={(newValue) => setPassword(newValue)}
                placeholder="Password"
            />  
            {currentPassword.length < 4 ? <Text style={styles.errorText}>Password must be 4 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 5,
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        height: 30,
    },
    text: {
        margin: 5,
        fontSize: 20,
    },
    errorText: {
        color: 'red',
    }
})

export default TextScreen;