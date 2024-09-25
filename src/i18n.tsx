import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend) // Подключение бэкенда i18next
  .use(LanguageDetector) // Автоматическое определение языка
  .use(initReactI18next) // Модуль инициализации
  .init({
    fallbackLng: 'en', // Язык по умолчанию
    debug: true, // Включение отладки
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'], // Сохранение языка в куки
      cookieOptions: { path: '/', sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 } // 7 дней
    },
    interpolation: {
      escapeValue: false, // Не экранировать значения
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к файлам переводов
    },
  });

export default i18n;

