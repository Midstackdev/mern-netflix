import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCdG5rIgapw_0xiXXjOloHC5jX5L9dp8a0",
    authDomain: "alfie-designs.firebaseapp.com",
    databaseURL: "https://alfie-designs.firebaseio.com",
    projectId: "alfie-designs",
    storageBucket: "alfie-designs.appspot.com",
    messagingSenderId: "929874169505",
    appId: "1:929874169505:web:7b340f20f0a130c2eb2ae0"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export {
    storage
}