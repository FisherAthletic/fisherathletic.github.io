import firebase from "firebase"

const config = {
    apiKey: "AIzaSyANE7vE2eOfLzNj-pQm7vZMCKhCcH0RC5Q",
    authDomain: "fisher-website-r.firebaseapp.com",
    databaseURL: "https://fisher-website-r.firebaseio.com",
    projectId: "fisher-website-r",
    storageBucket: "fisher-website-r.appspot.com",
    messagingSenderId: "1094240997058",
    appId: "1:1094240997058:web:44943c15a5e748c7d2f55b",
    measurementId: "G-LP1VYWMXF9"
  };

  firebase.initializeApp(config)

export default firebase