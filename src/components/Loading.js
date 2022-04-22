/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';
import ScreenStatusBar from './ScreenStatusBar';
import { Color } from '../config/utils/color';
import { LoadingAnim } from '../assets';

function Loading() {
  const focus = useIsFocused();

  return (
    <>
      <ScreenStatusBar status={focus} color={Color.SECOND_MAIN_COLOR} />
      <LottieView
        source={LoadingAnim}
        autoPlay
        loop
        style={{ backgroundColor: Color.SECOND_MAIN_COLOR }}
      />
    </>
  );
}

export default Loading;
