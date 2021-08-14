import 'core-js/stable';

import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import dataFormat from './modules/dateFormat';

const login = new Login('#form-login');

login.init();

dataFormat('.dateFormat')

import './assets/css/style.css';