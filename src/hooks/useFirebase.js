import { useEffect, useState } from "react";
import initializeApplication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeApplication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const googleProvider = new GoogleAuthProvider();
    const SignInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result =>
                setUser(result.user)
            )
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
        logOut
    }

}
export default useFirebase;