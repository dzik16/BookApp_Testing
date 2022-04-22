/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { loginUser } from '../../../config/api';
import ScreenStatusBar from '../../../components/ScreenStatusBar';

import { IconEmail, IconPassword } from '../../../assets';
import { Color } from '../../../config/utils/color';

import Header from './components/header';
import Title from './components/title';
import FormInput from '../../../components/FormInput';

function Login() {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Auth.token);
  const isLoading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    if (token) {
      navigation.replace('HomeScreen');
    }
  }, [token, navigation]);

  const formChecker = () => {
    const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]/;
    const emailStatus = emailRegEx.test(email); // Boolean

    if (email.length === 0 && password.length === 0) {
      Alert.alert('Error', 'Empty form, Please fill form correctly!');
    } else if (emailStatus && password.length >= 8) {
      dispatch(loginUser(email, password));
    } else {
      Alert.alert('Error', 'Invalid Form!');
    }
  };

  return (
    <SafeAreaView style={styles.container} testID="LoginScreen">
      <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
      <ScrollView showsVerticalScrollIndicator={false} testID="ScrollView">
        <Header />

        <Title />

        <FormInput
          icon={IconEmail}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          testID="input-email"
        />

        <FormInput
          icon={IconPassword}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          testID="input-password"
        />

        <View style={styles.containerRegist}>
          <View>
            <Text style={{ fontSize: 15, color: Color.WHITE }}>
              Dont have an account?
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}
              testID='btn-register'
            >
              <Text
                style={{ fontSize: 15, color: Color.WHITE, fontWeight: 'bold' }}
              >
                Sign Up
                {' '}
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.btnLogin, styles.shadowProp]}
          onPress={() => formChecker()}
          testID='btn-login'
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text
              style={{ fontSize: 15, color: Color.WHITE, fontWeight: 'bold' }}
            >
              Login
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY_MAIN_COLOR,
    paddingHorizontal: 25,
  },
  containerInput: {
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    marginVertical: 8,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 5,
  },
  iconInput: {
    flex: 1,
    alignSelf: 'center',
  },
  icon: {
    width: 25,
    height: 27,
    marginLeft: 10,
  },
  txtInput: {
    flex: 5,
  },
  containerRegist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BUTTON_AUTH,
    paddingVertical: 13,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 10,
  },
});
