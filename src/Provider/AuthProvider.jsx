import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext= createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
            const [user,setUser] =useState(null)
            console.log (user)

             const createUser=(email,password)=>{
                        return createUserWithEmailAndPassword(auth,email,password)
             }


             const signInUser=(email,password)=>{
              return signInWithEmailAndPassword(auth,email,password)
             }

             const logOut=()=>{
               
               return signOut(auth);
             }
              
             const googleLogin=()=>{
              return signInWithPopup(auth, googleProvider)

             }

             const githubLogin=()=>{
               return signInWithPopup(auth,githubProvider)
             }


           useEffect(()=>{
          const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
               console.log('user in the on state chance',currentUser);
               setUser(currentUser)
            })
            return()=>{
               unSubscribe();
            }
           },[])


            const authInfo={
                        user,
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