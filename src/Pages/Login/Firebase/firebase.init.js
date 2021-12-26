import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthInit = () => {
    return initializeApp(firebaseConfig);
}

export default firebaseAuthInit;