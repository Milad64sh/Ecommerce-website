// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNMwNtoQxXaRF08GRj-SUywkG3UjLjOIY',
  authDomain: 'ecommerce-3762e.firebaseapp.com',
  projectId: 'ecommerce-3762e',
  storageBucket: 'ecommerce-3762e.appspot.com',
  messagingSenderId: '713575758156',
  appId: '1:713575758156:web:ba4c71c985d989c82d37e9',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
