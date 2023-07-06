import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
    onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCAl-nN1GJiKByOnX_8KtN71b_Ix9SbDjU",
	authDomain: "basic-clothes-db.firebaseapp.com",
	projectId: "basic-clothes-db",
	storageBucket: "basic-clothes-db.appspot.com",
	messagingSenderId: "167630711596",
	appId: "1:167630711596:web:1b93a392b9f15461fa1a89",
};
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();



export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInfo = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    return userDocRef;
};


export const signWithGooglePopup = () => signInWithPopup(auth, googleProvider);


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);