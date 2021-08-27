import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: 'AIzaSyD4-bcFZbgv-jo06suD80-vovlgqguyQxs',
  authDomain: 'netflix-clone-5548d.firebaseapp.com',
  databaseURL: 'https://netflix-clone-5548d-default-rtdb.firebaseio.com',
  projectId: 'netflix-clone-5548d',
  storageBucket: 'netflix-clone-5548d.appspot.com',
  messagingSenderId: '1044699703093',
  appId: '1:1044699703093:web:2d9f45d1165cda0a49ce7c',
  measurementId: 'G-PGZXGBF4WX',
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
