/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { signupUser } from '../../../config/api';
import ScreenStatusBar from '../../../components/ScreenStatusBar';

import { IconEmail, IconPassword, IconName } from '../../../assets';
import { Color } from '../../../config/utils/color';

import Header from './components/header';
import FormInput from '../../../components/FormInput';

function Register() {
  const navigation = useNavigation();
  const focus = useIsFocused();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isRegSukses = useSelector((state) => state.Auth.isRegSukses);
  const isLoading = useSelector((state) => state.global.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegSukses) {
      navigation.replace('SuksesScreen');
    }
  }, [isRegSukses, navigation]);

  const formChecker = () => {
    const emailRegEx = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z]/;
    const emailStatus = emailRegEx.test(email); // Boolean

    if (email.length === 0 && password.length === 0 && name.length === 0) {
      Alert.alert('Error', 'Empty form, Please fill form correctly!');
    } else if (name && emailStatus && password.length >= 8) {
      dispatch(signupUser(name, email, password));
    } else {
      Alert.alert('Error', 'Invalid Form!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <FormInput
          icon={IconName}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          testID="input-FullName"
        />

        <FormInput
          icon={IconEmail}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          testID="input-Email"
        />

        <FormInput
          icon={IconPassword}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          testID="input-Password"
        />

        <View style={styles.containerRegist}>
          <View>
            <Text style={{ fontSize: 13, color: Color.WHITE }}>
              Already have an Account?
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}
              testID="button-Login"
            >
              <Text
                style={{ fontSize: 15, color: Color.WHITE, fontWeight: 'bold' }}
              >
                Login
                {' '}
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.btnLogin, styles.shadowProp]}
          onPress={() => formChecker()}
          testID="button-Register"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text
              style={{ fontSize: 15, color: Color.WHITE, fontWeight: 'bold' }}
            >
              Register
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Register;

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
    marginHorizontal: 5,
  },
  iconInput: {
    flex: 1,
    alignSelf: 'center',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
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
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});
