import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAKb8J8pQN6M4NhUekGLdIdfsLxdr9VCW4",
    authDomain: "pro-c71-c9e00.firebaseapp.com",
    projectId: "pro-c71-c9e00",
    storageBucket: "pro-c71-c9e00.appspot.com",
    messagingSenderId: "555722154884",
    appId: "1:555722154884:web:41ad5754fbf2bec18733d1"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
