import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fIOg2iAOh7qg93t8fxcnKiMbq5yQE_0",
  authDomain: "badbot-slideshow-9bb3b.firebaseapp.com",
  projectId: "badbot-slideshow-9bb3b",
  storageBucket: "badbot-slideshow-9bb3b.appspot.com",
  messagingSenderId: "892992024194",
  appId: "1:892992024194:web:34c2acfe510b18cdb34e9b"
};

firebase.initializeApp(firebaseConfig)

// const projectStorage = require('@google-cloud/storage')


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };