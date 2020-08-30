import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
        {
        apiKey: "AIzaSyC-LL_I7O681Du6oHaZ-2q-iI4X1v2wOVM",
        authDomain: "clone-3b8e4.firebaseapp.com",
        databaseURL: "https://clone-3b8e4.firebaseio.com",
        projectId: "clone-3b8e4",
        storageBucket: "clone-3b8e4.appspot.com",
        messagingSenderId: "262307564290",
        appId: "1:262307564290:web:358e7993cc32f4cf84101b"
      }
);


export const auth = firebase.auth();