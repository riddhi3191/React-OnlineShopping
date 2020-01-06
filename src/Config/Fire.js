import firebase from 'firebase'


  var Config = {
    apiKey: "AIzaSyA_AxhaZQwSiBUQFDADmmgKuiKQkM1iv68",
    authDomain: "online-shopping-15392.firebaseapp.com",
    databaseURL: "https://online-shopping-15392.firebaseio.com",
    projectId: "online-shopping-15392",
    storageBucket: "online-shopping-15392.appspot.com",
    messagingSenderId: "1549519157",
    appId: "1:1549519157:web:df640b835cb8f5d69f247c",
    measurementId: "G-PFV1D9L69E"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(Config);
export default fire;
