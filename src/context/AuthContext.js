import {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../services/FirebaseConfig'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [user, setUser] = useState({});
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut () {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (curUser)=>{
            setUser(curUser)
        })
        return () = {
            unsubcribe();
        }
    });

    return (
        <AuthContext.Provider value={{signUp, user}}>
            {children}
        </AuthContext.Provider>
    )
}

function UserAuth() {
    return useContext(AuthContext)
}

export {AuthContextProvider , UserAuth}










