import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHFk4k34ZEols-dcvG8OLDWEJVKm198Iw",
  authDomain: "badbot-gallery.firebaseapp.com",
  projectId: "badbot-gallery",
  storageBucket: "badbot-gallery.appspot.com",
  messagingSenderId: "335838503308",
  appId: "1:335838503308:web:25a88f4a16fbb3cc0576a9",
  measurementId: "G-04G8260PTS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
