import { initializeApp } from "firebase/app";
import {
	getAuth,
	signIn,
	signInWithPopup,
	GoogleAuthProvider,
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

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(err) {
            console.log(err.message);
        }
    }

    return userDocRef;
}