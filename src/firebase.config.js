import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCqOnn09NJbtDF46pQI9PjjUrhGZYi0BSQ",
    authDomain: "crud-react-8bd6d.firebaseapp.com",
    projectId: "crud-react-8bd6d",
    storageBucket: "crud-react-8bd6d.appspot.com",
    messagingSenderId: "149935214737",
    appId: "1:149935214737:web:6b52b8fa8193803fdaef30",
    measurementId: "G-YBNDV90YME"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };