
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB9vIyH_AMDPl67DBGND1P6hddBHMKWNho",
  authDomain: "newsai-7b5ae.firebaseapp.com",
  projectId: "newsai-7b5ae",
  storageBucket: "newsai-7b5ae.firebasestorage.app",
  messagingSenderId: "433499761544",
  appId: "1:433499761544:web:417d71a06518874c57683d",
  measurementId: "G-EP72NDE6CH"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app) ;
export const googleAuthProvider = new GoogleAuthProvider()