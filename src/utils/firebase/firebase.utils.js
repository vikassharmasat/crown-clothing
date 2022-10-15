import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSiIB-McSz0NRESmYlto6b53A0EHDD_Yk",
    authDomain: "crown-clothing-9648a.firebaseapp.com",
    projectId: "crown-clothing-9648a",
    storageBucket: "crown-clothing-9648a.appspot.com",
    messagingSenderId: "913536012712",
    appId: "1:913536012712:web:2f6e5127d699e3f37f8d9d"
};

// Initialize Firebase
initializeApp( firebaseConfig );

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters( {
    prompt: "select_account"
} )

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, googleProvider );
export const signInWithGoogleRedirect = () => signInWithRedirect( auth, googleProvider );

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if ( !userAuth ) {
        return;
    }
    const userDocRef = doc( db, 'users', userAuth.uid );
    const userSnapShot = await getDoc( userDocRef );
    if ( !userSnapShot.exists() ) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            } );
        } catch ( error ) {
            console.log( 'error creating the user', error.message )
        }
    }

    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
    if ( !email || !password ) return;
    return await createUserWithEmailAndPassword( auth, email, password );
}

export const signInUserWithEmailAndPassword = async ( email, password ) => {
    if ( !email || !password ) return;
    return await signInWithEmailAndPassword( auth, email, password );
}