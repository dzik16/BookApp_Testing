/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import { ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getBooksId, setRefresh } from '../../../config/api';

import ScreenStatusBar from '../../../components/ScreenStatusBar';
import { Color } from '../../../config/utils/color';

import Header from './components/header';
import Banner from './components/banner';
import Rating from './components/rating';
import Overview from './components/overview';
import Loading from '../../../components/Loading';

function DetailScreen({ route }) {
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const dataBooksId = useSelector(state => state.dataBooks.booksId);
  const getToken = useSelector(state => state.Auth.token);
  const isLoading = useSelector(state => state.global.isLoading);
  const isRefresh = useSelector(state => state.global.isRefresh);

  const { id } = route.params;

  useEffect(() => {
    dispatch(getBooksId(getToken, id));
  }, []);

  const onRefresh = () => {
    dispatch(setRefresh(true));
    dispatch(getBooksId(getToken, id));
  };

  if (!isLoading) {
    return (
      <>
        <Header data={dataBooksId} />
        <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
        <ScrollView
          style={styles.content}
          refreshControl={
            <RefreshControl
              refreshing={isRefresh}
              onRefresh={() => onRefresh()}
            />
          }>
          <View style={styles.container}>
            <Banner data={dataBooksId} />
            <Rating data={dataBooksId} />
            <Overview data={dataBooksId} />
          </View>
        </ScrollView>
      </>
    );
  }
  return <Loading />;
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    height: 650,
    backgroundColor: Color.BACKGROUND_DETAIL,
    marginTop: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    backgroundColor: Color.SECOND_MAIN_COLOR,
  },
});
