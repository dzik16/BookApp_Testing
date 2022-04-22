/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import { Color } from '../../../../config/utils/color';

const banner = (props) => (
  <View style={styles.container}>
    <View>
      <Image
        source={{ uri: props.data.cover_image }}
        style={styles.imgBanner}
      />
    </View>
    <View style={styles.data}>
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.author}>{props.data.author}</Text>
      <Text style={styles.publisher}>{props.data.publisher}</Text>
    </View>
  </View>
);

export default banner;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'relative',
    marginTop: -60,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  imgBanner: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  data: {
    justifyContent: 'center',
    width: 200,
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.BLACK,
    paddingBottom: 18,
  },
  author: {
    fontSize: 16,
    color: Color.BLACK,
    paddingBottom: 5,
  },
  publisher: {
    fontSize: 16,
    color: Color.BLACK,
  },
});
