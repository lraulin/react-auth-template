import * as firebase from 'firebase';

const prodConfig = {};

const devConfig = {
  // Paste config from Firebase here.
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
