import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKrMa_C_YMkXQQjxlNt6raqLclBtlHQfY",
  authDomain: "shopaholic-3322a.firebaseapp.com",
  databaseURL: "https://shopaholic-3322a.firebaseio.com",
  projectId: "shopaholic-3322a",
  storageBucket: "shopaholic-3322a.appspot.com",
  messagingSenderId: "671633124351",
  appId: "1:671633124351:web:690101cdc1fe44b23b55ca",
  measurementId: "G-MG41XLZ0J5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };