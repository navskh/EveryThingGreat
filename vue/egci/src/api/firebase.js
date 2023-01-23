// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDNOPkYO72xWicUdH6tSrlt4wLBZ2ltrTo",
  authDomain: "egci-bbb14.firebaseapp.com",
  projectId: "egci-bbb14",
  storageBucket: "egci-bbb14.appspot.com",
  messagingSenderId: "754101115190",
  appId: "1:754101115190:web:69629615e8f39428537b97",
  measurementId: "G-5GF596FCFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const board = collection(db, "board");

/**
 * 모든 문서의 정보 가져오기
 */
export async function getBoard() {
  const boardSnapshot = await getDocs(board);

  boardSnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}

/**
 * Insert 하기
 */
export async function setBoard() {
  console.log("set Board! ");

  try {
    const docRef = await addDoc(collection(db, "users"), {
      title: "Ada",
      content: "Lovelace",
      author: "YoungMan",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
