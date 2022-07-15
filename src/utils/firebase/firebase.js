// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOOqQRhOQBEGjokbKgcE0W2AKSVJ46wI0",
  authDomain: "siraj-portfolio.firebaseapp.com",
  projectId: "siraj-portfolio",
  storageBucket: "siraj-portfolio.appspot.com",
  messagingSenderId: "337666659293",
  appId: "1:337666659293:web:d3edf55ef2d5951bcd5c34"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const db = getFirestore()
const projectsRef = collection(db, 'projects');

export const onSnapshotHandler = (callback) => onSnapshot(projectsRef, callback); 