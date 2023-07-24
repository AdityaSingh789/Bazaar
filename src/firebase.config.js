import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDRFxN_EdUl9-UaYr9XTVaztHbcXxDmNCE",
  authDomain: "bazaar-bd806.firebaseapp.com",
  projectId: "bazaar-bd806",
  storageBucket: "bazaar-bd806.appspot.com",
  messagingSenderId: "72658840845",
  appId: "1:72658840845:web:3eb97fa2a175eca32ad444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)

export default app