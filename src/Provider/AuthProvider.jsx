import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext= createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
            const [user,setUser] =useState(null)
            const [loading,setLoading]=useState(true)
            console.log (user)

             const createUser=(email,password)=>{
              setLoading(true)
                        return createUserWithEmailAndPassword(auth,email,password)
             }


             const signInUser=(email,password)=>{
              setLoading(true)
              return signInWithEmailAndPassword(auth,email,password)
             }

             const logOut=()=>{
               setLoading(true)
               return signOut(auth);
             }
              
             const googleLogin=()=>{
              setLoading(true)
              return signInWithPopup(auth, googleProvider)

             }

             const githubLogin=()=>{

              setLoading(true)
               return signInWithPopup(auth,githubProvider)
             }


           useEffect(()=>{
          const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
               console.log('user in the on state chance',currentUser);
               setUser(currentUser)
               setLoading(false)
            })
            return()=>{
               unSubscribe();
            }
           },[])


            const authInfo={
                        user,
                        loading,
                        createUser,
                        signInUser,
                        logOut,
                        googleLogin,
                        githubLogin
            }
            return (
                        <AuthContext.Provider value={authInfo} >
                           {children}         
                        </AuthContext.Provider>
            );
};

export default AuthProvider;