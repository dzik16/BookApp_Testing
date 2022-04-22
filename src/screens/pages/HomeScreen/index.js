/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import { StyleSheet, Text, View, FlatList, RefreshControl, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import ScreenStatusBar from '../../../components/ScreenStatusBar';
import {
  getBooksPopular,
  getBooksRecommended,
  setRefresh,
} from '../../../config/api';
import { Color } from '../../../config/utils/color';
import { IconLogout, Foto, IconMedia } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

import Header from './components/header';
import Recommended from './components/recommended';
import Popular from './components/popular';
import Loading from '../../../components/Loading';
import { logout } from '../../../config/api';

function HomeScreen() {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const dispatch = useDispatch();

  const dataBooksRecommended = useSelector(
    state => state.dataBooks.booksRecommended,
  );

  const dataBooksPopular = useSelector(state => state.dataBooks.booksPopular);
  const getToken = useSelector(state => state.Auth.token);
  const getNama = useSelector(state => state.Auth.name);
  const isLoading = useSelector(state => state.global.isLoading);
  const isRefresh = useSelector(state => state.global.isRefresh);

  useEffect(() => {
    dispatch(getBooksRecommended(getToken, 6));
    dispatch(getBooksPopular(getToken));
  }, []);

  const onRefresh = () => {
    dispatch(setRefresh(true));
    dispatch(getBooksRecommended(getToken, 6));
    dispatch(getBooksPopular(getToken));
  };

  const logOut = () => {
    dispatch(logout());
    navigation.replace('SplashScreen');
  };

  if (!isLoading) {
    return (
      <View style={styles.main} testID="HomeScreen">
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{`Hi, Dzikri`}</Text>
          <View style={styles.boxHeader}>
            <TouchableOpacity>
              <Image source={Foto} style={styles.foto} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MediaScreen')}>
              <Image source={IconMedia} style={styles.search} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logOut()} testID="btn-logout">
              <Image source={IconLogout} style={styles.search} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dataBooksPopular}
            numColumns={2}
            keyExtractor={index => String(index)}
            refreshControl={
              <RefreshControl
                refreshing={isRefresh}
                onRefresh={() => onRefresh()}
              />
            }
            ListHeaderComponent={() => (
              <>
                <ScreenStatusBar
                  status={focus}
                  color={Color.SECOND_MAIN_COLOR}
                />
                <Recommended data={dataBooksRecommended} />
                <Text style={styles.popular}>Popular</Text>
              </>
            )}
            renderItem={({ item }) => <Popular data={item} />}
          />
        </View>
      </View>
    );
  }
  return <Loading />;
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Color.SECOND_MAIN_COLOR,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.BACKGROUND_DETAIL,
  },
  popular: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.BLACK,
    marginVertical: 10,
  },
  headerContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    flex: 4,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  boxHeader: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    width: 23,
    height: 22,
  },
  foto: {
    height: 25,
    width: 25,
    borderRadius: 50,
  },
});
