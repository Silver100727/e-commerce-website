import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlp1msknq06mrSeiXSpkPgygLQBTBT55w",
  authDomain: "e-commerce-website-a8e5e.firebaseapp.com",
  projectId: "e-commerce-website-a8e5e",
  storageBucket: "e-commerce-website-a8e5e.appspot.com",
  messagingSenderId: "237435748309",
  appId: "1:237435748309:web:7ec2635985d9c7cc75475c",
  measurementId: "G-M6019TK6C2",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signinwithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectionandDocument = async (
  collectionKey,
  objectcToAdd = []
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectcToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q); // Corrected getDoc to getDocs
  const categoriesMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoriesMap;
};


//insert use in database
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createUserDocumentFromEmailandPassword = async (
  email,
  password
) => {
  if (!email && !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailandPassword = async (email, password) => {
  if (!email && !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListerner = (callback) =>
  onAuthStateChanged(auth, callback);
