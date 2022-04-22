/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import NumberFormat from 'react-number-format';
import { Color } from '../../../../config/utils/color';

const popular = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', { id: props.data.id })}
    >
      <View style={[styles.container, styles.shadowProp]}>
        <Image
          source={{ uri: props.data.cover_image }}
          style={styles.bookImage}
        />
        <Text style={styles.bookTitle}>{props.data.title}</Text>
        <Text style={styles.bookAuthor}>{props.data.author}</Text>
        <Text style={styles.bookPublisher}>{props.data.publisher}</Text>
        <View style={styles.bookRating}>
          <Rating
            startingValue={Number(props.data.average_rating) / 2}
            readonly
            type="custom"
            imageSize={15}
            style={styles.rating}
            ratingColor={Color.PRIMARY_MAIN_COLOR}
            tintColor={Color.BUTTON_AUTH}
          />
          <Text style={styles.ratingText}>
            {Number(props.data.average_rating) / 2}
            <Text style={styles.detailedText}>/5</Text>
          </Text>
        </View>
        <View>
          <NumberFormat
            value={props.data.price}
            displayType="text"
            thousandSeparator
            prefix="Rp "
            renderText={(value) => <Text style={styles.bookPrice}>{value}</Text>}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default popular;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BUTTON_AUTH,
    borderRadius: 10,
    width: 145,
    height: 310,
    marginRight: 25,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  bookImage: {
    width: 130,
    height: 180,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  bookTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Color.BLACK,
  },
  bookPublisher: {
    fontSize: 12,
  },
  bookRating: {
    flexDirection: 'row',
  },
  rating: {
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  ratingText: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 12,
    color: Color.BLACK,
    fontWeight: 'bold',
  },
  bookPrice: {
    color: Color.WHITE,
    fontWeight: 'bold',
    marginTop: 5,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
});
