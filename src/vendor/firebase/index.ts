// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzOpts2RTTaqR0YAx6H0WhkVvizobbW7o",
  authDomain: "money-manager-6f5f6.firebaseapp.com",
  projectId: "money-manager-6f5f6",
  storageBucket: "money-manager-6f5f6.appspot.com",
  messagingSenderId: "889279905341",
  appId: "1:889279905341:web:beb112a7a7f1eaa3a87454",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
