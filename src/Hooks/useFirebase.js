import { useEffect, useState } from "react";
import firebaseAuthInit from "../Pages/Login/Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider
} from "firebase/auth";


firebaseAuthInit()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google SignIn handle
    const googleSignInHandler = (location, navigate) => {

        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                const destination = location?.state?.from || '/';
                navigate(destination);

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage);

            }).finally(function () {
                // always executed
                setIsLoading(false);
            });
    }
    // auth observer
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                // User is signed out
                setUser({});
            }
            setIsLoading(false);
        });
    }, [auth])

    // google log out handle
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return {
        googleSignInHandler,
        logOut,
        user,
        error,
        isLoading
    };

}
export default useFirebase;