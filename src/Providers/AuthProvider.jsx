import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSingOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const singWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const singWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    })

    const authInfo = {
        user,
        loading,
        createUser,
        userLogIn,
        userSingOut,
        singWithGoogle,
        singWithFacebook


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;