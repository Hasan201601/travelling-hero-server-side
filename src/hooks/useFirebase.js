import { useEffect, useState } from "react";
import initializeApplication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeApplication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const googleProvider = new GoogleAuthProvider();
    const SignInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    return {
        SignInWithGoogle,
        user,
        setUser,
        logOut,
        error,
        setError,
        setIsLoading,
        isLoading
    }

}
export default useFirebase;