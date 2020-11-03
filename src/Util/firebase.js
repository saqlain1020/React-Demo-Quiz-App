import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA3OgXcuO8xj5GDwHJRgYRg4tuBtBq2q0g",
  authDomain: "react-quiz-app-a5116.firebaseapp.com",
  databaseURL: "https://react-quiz-app-a5116.firebaseio.com",
  projectId: "react-quiz-app-a5116",
  storageBucket: "react-quiz-app-a5116.appspot.com",
  messagingSenderId: "175000509759",
  appId: "1:175000509759:web:21e43ee4d93ff249dfc78a",
};

firebase.initializeApp(config);

export default firebase;

export var db = firebase.firestore();
export var auth = firebase.auth();
