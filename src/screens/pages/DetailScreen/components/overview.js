/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Color } from '../../../../config/utils/color';

const overview = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>overview</Text>
    <Text style={styles.overview}>{props.data.synopsis}</Text>
  </View>
);

export default overview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.BLACK,
  },
  overview: {
    fontSize: 15,
    color: Color.BLACK,
    paddingTop: 10,
    textAlign: 'justify',
  },
});
