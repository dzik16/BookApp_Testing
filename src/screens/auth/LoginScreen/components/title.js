/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const title = () => (
  <View style={styles.container}>
    <Text style={styles.txtWelcome}>Hii, Welcome</Text>
    <Text style={styles.title}>
      Welcome to BookApp, the app that offers you the best and must-have
      books!
    </Text>
  </View>
);

export default title;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  txtWelcome: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
});
