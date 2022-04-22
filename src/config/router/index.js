/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Stack';
import { navigationRef } from './navigate';

const index = () => (
  <NavigationContainer ref={navigationRef}>
    <Router />
  </NavigationContainer>
);

export default index;
