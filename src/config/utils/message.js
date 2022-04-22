/* eslint-disable import/prefer-default-export */
import { FlashMessageManager } from 'react-native-flash-message';
import { Color } from './color';

export function error(message) {
  FlashMessageManager({
    message,
    type: 'default',
    backgroundColor: Color.warning,
    color: Color.WHITE,
  });
}
