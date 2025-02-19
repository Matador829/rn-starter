import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({imageSource, title, score}) => {
  return <View style={styles.container}>
    <Image source={imageSource} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Image Score - {score}</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    marginLeft: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ImageDetail;
