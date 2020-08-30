// import { Localization } from 'expo';
// import i18n from 'i18n-js';
// import en_US from './en_US.json';
// import zh_CN from './zh_CN.json';
// import en_SG from './en_SG.json';
//
// i18n.fallbacks = true;
// i18n.translations = { 'en-US': en_US, 'zh-CN': zh_CN, 'en-SG': en_SG };
// i18n.locale = Localization.locale;
//
// export default i18n;

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en.json';
import zh from './zh.json';

i18n.fallbacks = true;
i18n.translations = { en, zh };
i18n.locale = Localization.locale;
i18n.timezone = Localization.timezone;
export default i18n;
