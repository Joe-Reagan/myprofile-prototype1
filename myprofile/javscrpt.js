import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyD3zyautJg82ZRSzR5Ic4f1OTl4zLIZCU4",
    authDomain: "churchbookings-b975f.firebaseapp.com",
    projectId: "churchbookings-b975f",
    storageBucket: "churchbookings-b975f.firebasestorage.app",
    messagingSenderId: "758860011692",
    appId: "1:758860011692:web:b45e270e332d46fbfe6709",
    measurementId: "G-38SF70Q8XJ"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Event listener
document.getElementById('submit').addEventListener('click', submitForm);

async function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('Email').value;
  const message = document.getElementById('message').value;

  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
      createdAt: new Date()
    });

    alert("Your request has been submitted! We will reach out shortly.");

  } catch (error) {
    console.error("Error:", error);
  }
}