import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes ,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkgBHdLw1FsAZ1xaQ5dAxdLRoW30DqXvg",
  authDomain: "course-scope-398003.firebaseapp.com",
  projectId: "course-scope-398003",
  storageBucket: "course-scope-398003.appspot.com",
  messagingSenderId: "343392987610",
  appId: "1:343392987610:web:b351e2222a9a5fdfd7f8e3"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

 export async function uploadfile(file){
  const storagRef =ref(storage, v4())
  await uploadBytes(storagRef, file)
  const url = await getDownloadURL(storagRef)
  return url
}