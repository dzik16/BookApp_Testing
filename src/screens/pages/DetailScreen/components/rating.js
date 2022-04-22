/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';
import { Rating } from 'react-native-ratings';
import { Color } from '../../../../config/utils/color';

const rating = (props) => (
  <View style={styles.container}>
    <View>
      <Rating
        startingValue={Number(props.data.average_rating) / 2}
        readonly
        type="custom"
        imageSize={15}
        ratingBackgroundColor={Color.BACKGROUND_DETAIL}
        style={styles.rating}
        ratingColor={Color.BUTTON_AUTH}
        tintColor={Color.WHITE}
      />
      <Text style={styles.ratingText}>
        {Number(props.data.average_rating) / 2}
        <Text style={styles.detailedText}>/5</Text>
      </Text>
    </View>

    <View>
      <Text
        style={{ fontSize: 14, color: Color.BUTTON_AUTH, fontWeight: 'bold' }}
      >
        Total Sale
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Color.BLACK,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 5,
        }}
      >
        {props.data.total_sale}
      </Text>
    </View>
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.bookPrice}>Buy </Text>
      <NumberFormat
        value={props.data.price}
        displayType="text"
        thousandSeparator
        prefix="Rp "
        renderText={(value) => <Text style={styles.bookPrice}>{value}</Text>}
      />
    </TouchableOpacity>
  </View>
);

export default rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  rating: {
    alignSelf: 'center',
    marginTop: 3,
  },
  ratingText: {
    marginTop: 5,
    alignSelf: 'center',
    fontSize: 14,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  btn: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Color.PRIMARY_MAIN_COLOR,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  bookPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.WHITE,
    alignSelf: 'center',
  },
});
