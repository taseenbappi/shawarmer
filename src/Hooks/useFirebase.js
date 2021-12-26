import { useEffect, useState } from "react";
import firebaseAuthInit from "../Pages/Login/Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";


firebaseAuthInit()

const useFirebase = () => {

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // user email and password register hangler
    const registerHangler = (userInfo, location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)

            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const newUser = { displayName: userInfo.displayName, email: userInfo.email };
                setUser(newUser);

                setAuthError('');

                const destination = location?.state?.from || "/home";
                navigate(destination);
                // user profile Update
                updateProfile(auth.currentUser, {
                    displayName: userInfo.displayName
                }).then(() => {
                    // Profile updated!

                }).catch((error) => {
                    // An error occurred
                    setError(error.message);
                });

            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
                // ..
            }).finally(() => setIsLoading(false));
    }
    // register users login hangler
    const registerUserSignInHangler = (userInfo, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                const destination = location?.state?.from || "/home";
                navigate(destination);
                setAuthError("");

                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);

            }).finally(() => setIsLoading(false));
    }

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
        registerHangler,
        registerUserSignInHangler,
        authError,
        user,
        error,
        isLoading
    };

}
export default useFirebase;