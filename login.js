// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore,collection, addDoc




} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkUd2-Zw2AP725GUEf_TRgHGG7JKmfsgc",
  authDomain: "food-app-112.firebaseapp.com",
  projectId: "food-app-112",
  storageBucket: "food-app-112.appspot.com",
  messagingSenderId: "273684517097",
  appId: "1:273684517097:web:d8b9b1516c96fe5e19e078",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);





// My Code Started

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", submit);


async function submit() {

    try {
        
          const email = document.querySelector("#email").value;
          const password = document.querySelector("#password").value;
        
          const userObj = {
            email,
            password
          }

          const  docRef = await addDoc (collection(db, "users"), userObj)
        
          console.log(docRef);
        
    } catch (error) {
        console.log(error, error.message);
    }



}



