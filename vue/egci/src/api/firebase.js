// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
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

  // boardSnapshot.forEach((doc) => {
  //   console.log(doc.id, "=>", doc.data());
  // });

  return boardSnapshot;
}

/**
 * Insert 하기
 */
export async function setBoard(boardData) {
  console.log("set Board! ", boardData);

  try {
    const docRef = await addDoc(collection(db, "board"), {
      idx: boardData.idx,
      title: boardData.title,
      content: boardData.content,
      author: boardData.author,
      category: boardData.category,
      crDate: boardData.crDate,
      modDate: boardData.modDate,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getMaxID() {
  console.log("get Max ID");
  const boardSnapshot = await getDocs(board);

  console.log(boardSnapshot.docs.filter((doc) => doc.data()));
  let maxID = 1;
  boardSnapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    maxID = Number(doc.data().idx) + 1;
  });

  return maxID;
}
