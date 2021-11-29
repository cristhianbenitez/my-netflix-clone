import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'netflix-clone-5548d.firebaseapp.com',
  databaseURL: 'https://netflix-clone-5548d-default-rtdb.firebaseio.com',
  projectId: 'netflix-clone-5548d',
  storageBucket: 'netflix-clone-5548d.appspot.com',
  messagingSenderId: '1044699703093',
  appId: '1:1044699703093:web:2d9f45d1165cda0a49ce7c',
  measurementId: 'G-PGZXGBF4WX'
};
// eslint-disable-next-line no-unused-vars
const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
