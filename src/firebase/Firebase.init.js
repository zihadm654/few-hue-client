import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeFirebasae=()=>{
    initializeApp(firebaseConfig);
}
export default initializeFirebasae;