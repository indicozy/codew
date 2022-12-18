var en = require('./translations.en.json');
var ru = require('./translations.ru.json');
var kz = require('./translations.kz.json');

const i18n = {
  translations: {
    en,
    ru,
    kz,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
};

module.exports = i18n;
