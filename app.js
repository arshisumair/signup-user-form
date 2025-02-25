import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
 
 
 const firebaseConfig = {
   apiKey: "AIzaSyDRYiUiwvJr0lIaPu6TzrqUT71BOvI5Z_g",
   authDomain: "database-92641.firebaseapp.com",
   projectId: "database-92641",
   storageBucket: "database-92641.firebasestorage.app",
   messagingSenderId: "349334716761",
   appId: "1:349334716761:web:ac28eece567809997ccc48",
   measurementId: "G-T47JG4XYMT"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getDatabase(app)
 document.getElementById("btn").addEventListener("click", function(event){
event.preventDefault()
set(ref(db,'student data/' + document.getElementById("Gender").value),

{
  userName:document.getElementById("UserName").value,
  phone:document.getElementById("Phone").value,
  email:document.getElementById("email").value,
})
alert("data save successfully")
 })
