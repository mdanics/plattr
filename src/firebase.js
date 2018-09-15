import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDlZ1bPy_xkt1at4Y4F4WNCUrd44zsiVUE",
  authDomain: "plattr-c530d.firebaseapp.com",
  databaseURL: "https://plattr-c530d.firebaseio.com",
  projectId: "plattr-c530d",
  storageBucket: "plattr-c530d.appspot.com",
  messagingSenderId: "742172838454"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true});

export { firestore }