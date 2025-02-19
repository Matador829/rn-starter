import React from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../../assets/placeholder.jpg")}
      />
      <Text style={styles.name}>Julio Buendia</Text>
      <Text style={styles.about}>
        Hi! I'm a Product Manager passionate about creating amazing mobile experiences.
        I love working with React Native and exploring new technologies.
        In my free time, I enjoy tacos.
      </Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate("List")}
        />
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate("Image")}
        />
        <Button
          title="Go to Counter Demo"
          onPress={() => navigation.navigate("Counter")}
        />
        <Button
          title="Go to Color Demo"
          onPress={() => navigation.navigate("Color")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  about: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
    paddingBottom: 20,
  },
});

export default HomeScreen;
