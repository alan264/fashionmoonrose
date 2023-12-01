import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey:"",
    authDomain:"webfashion-b0fc5.firebaseapp.com",
    projectId:"webfashion-b0fc5"
});

export default firebase.firestore();

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey:"",
//     authDomain:"webfashion-b0fc5.firebaseapp.com",
//     projectId:"webfashion-b0fc5"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;