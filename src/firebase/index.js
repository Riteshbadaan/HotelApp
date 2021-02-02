import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAxcsB7Wsoy3OFDVFWrsxd9MsiTKw1s6Wk",
    authDomain: "hotelapp-f223c.firebaseapp.com",
    databaseURL: "https://hotelapp-f223c.firebaseio.com",
    projectId: "hotelapp-f223c",
    storageBucket: "hotelapp-f223c.appspot.com",
    messagingSenderId: "976202495767",
    appId: "1:976202495767:web:3e66938b705e7a4a926952",
    measurementId: "G-GG87PDYP4B"
  };

  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage();

  export {storage,firebase as default};