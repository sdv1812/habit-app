import { Platform } from 'react-native';
import Constants from 'expo-constants';
import i18n from '../translations/i18n';

export const getDeviceModel = () => {
  if (Platform.OS === 'ios') {
    return Constants.platform.ios.model;
  }
  return Constants.deviceName;
};

export const getDeviceLocale = () => {
  const locale = i18n.locale;
  return locale.slice(0, locale.indexOf('-'));
};
