// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsUibatMkG8hUfLq0Mh-EC_zK_3E4Vhv4",
  authDomain: "login-b685d.firebaseapp.com",
  projectId: "login-b685d",
  storageBucket: "login-b685d.appspot.com",
  messagingSenderId: "125501242913",
  appId: "1:125501242913:web:f0c7bb4341abcfc29dad60",
  measurementId: "G-KLFVLFY8R3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth;
export{app,auth};