import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
export const firebaseConfig = {

  firebase : {


    apiKey: "AIzaSyBstD2_vKv_WXt1qm5WnuqBy0-iqThKDro",
    authDomain: "aegee-las-palmas-370b7.firebaseapp.com",
    projectId: "aegee-las-palmas-370b7",
    storageBucket: "aegee-las-palmas-370b7.appspot.com",
    messagingSenderId: "466542820130",
    appId: "1:466542820130:web:f85beac5df4b3b6765837b",
    databaseURL: "https://aegee-las-palmas-370b7.firebaseio.com"
  }
};

const app = initializeApp(firebaseConfig.firebase);
