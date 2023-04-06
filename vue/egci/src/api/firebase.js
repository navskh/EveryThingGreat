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
  deleteDoc,
  setDoc,
  getDoc,
  writeBatch,
  updateDoc,
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
  let boardSample = [];
  boardSnapshot.forEach((board) => {
    boardSample.push(board.data());
  });
  return boardSample;
}

export async function getBoardByIdx(idx) {
  const snapShot = await getDocs(board);

  let thisData = snapShot.docs.map(doc => doc.data());
  let filtered = thisData.filter(ele => ele.idx == idx);
  return filtered[0];
}

/**
 * Insert 하기
 */
export async function setBoard(boardData) {
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
    return docRef.id ? true : false;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function updateBoard(idx, boardData) {
  const docId = await getDocIdx(idx);
  try {
    const docRef = await updateDoc(doc(db, "board", docId), {
      idx: boardData.idx,
      title: boardData.title,
      content: boardData.content,
      author: boardData.author,
      category: boardData.category,
      crDate: boardData.crDate,
      modDate: boardData.modDate,
    });

    return 'success';
  } catch (e) {
    console.log("Error adding document: ", e);
    return 'fail'
  }
}

export async function getMaxID() {
  const boardSnapshot = await getDocs(board);

  let arrIDx = boardSnapshot.docs.map((doc) => {
    return doc.data().idx
  });

  let maxIdx = arrIDx.length == 0 ? 1 : Math.max(...arrIDx) + 1
  return maxIdx;
}

async function getDocIdx(idx) {
  const documentation = await getDocs(board)
  let thisData = documentation.docs.filter((doc) => {
    return doc.data().idx == idx;
  });
  const docID = thisData[0].id;
  return docID;
}


export async function deletePost(idx) {
  const docID = await getDocIdx(idx);
  try {
    await deleteDoc(doc(db, "board", docID));
    return 'success';
  }
  catch (e) {
    console.log(e);
    return 'error';
  }
}