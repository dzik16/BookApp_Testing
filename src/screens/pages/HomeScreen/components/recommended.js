/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../../../config/utils/color';

const recommended = (props) => {
  const navigation = useNavigation();

  function sortData(props) {
    const data = props;

    const sort = data.slice(0);
    sort.sort((a, b) => b.average_rating - a.average_rating);

    return sort;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sortData(props.data)}
        keyExtractor={(item) => item.id}
        initialNumToRender={6}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.content, styles.shadowProp]}
            onPress={() => navigation.navigate('DetailScreen', { id: item.id })}
          >
            <Image source={{ uri: item.cover_image }} style={styles.bookCover} />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default recommended;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  bookCover: {
    width: 130,
    height: 180,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  content: {
    backgroundColor: Color.BACKGROUND_MAIN,
    borderRadius: 10,
    width: 145,
    height: 255,
    marginRight: 25,
    paddingHorizontal: 8,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginBottom: 10,
  },
  bookTitle: {
    paddingTop: 5,
    color: Color.BLACK,
    fontWeight: 'bold',
    fontSize: 12,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 6,
  },
});
