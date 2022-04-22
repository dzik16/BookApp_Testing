/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import LottieView from 'lottie-react-native';
import { InternetAnim } from '../assets';
import { Color } from '../config/utils/color';

const internet = () => (
  <LottieView
    source={InternetAnim}
    autoPlay
    loop
    style={{ backgroundColor: Color.WHITE }}
  />
);

export default internet;
