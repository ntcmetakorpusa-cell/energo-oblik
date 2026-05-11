// ============================================================
//  config.example.js — ШАБЛОН КОНФІГУРАЦІЇ
//  
//  ІНСТРУКЦІЯ:
//  1. Скопіюйте цей файл: config.example.js → config.js
//  2. Заповніть реальні паролі в config.js
//  3. НІКОЛИ не комітьте config.js в GitHub (він в .gitignore)
// ============================================================

const APP_CONFIG = {
  users: [
    {
      id: 1,
      login: 'admin',
      password: 'ЗАМІНІТЬ_НА_СВІЙ_ПАРОЛЬ',
      name: 'Адміністратор',
      role: 'admin',
      email: 'admin@yourcompany.ua',
      active: true
    },
    {
      id: 2,
      login: 'electric1',
      password: 'ЗАМІНІТЬ_НА_СВІЙ_ПАРОЛЬ',
      name: 'Іваненко В.П.',
      role: 'electrician',
      email: 'el1@yourcompany.ua',
      active: true
    },
    {
      id: 3,
      login: 'electric2',
      password: 'ЗАМІНІТЬ_НА_СВІЙ_ПАРОЛЬ',
      name: 'Петренко О.М.',
      role: 'electrician',
      email: 'el2@yourcompany.ua',
      active: true
    },
    {
      id: 4,
      login: 'director',
      password: 'ЗАМІНІТЬ_НА_СВІЙ_ПАРОЛЬ',
      name: 'Директор',
      role: 'director',
      email: 'director@yourcompany.ua',
      active: true
    },
    {
      id: 5,
      login: 'accountant',
      password: 'ЗАМІНІТЬ_НА_СВІЙ_ПАРОЛЬ',
      name: 'Головний бухгалтер',
      role: 'accountant',
      email: 'buh@yourcompany.ua',
      active: true
    }
  ]
};
