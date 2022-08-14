// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig={
    apiKey: "AIzaSyBorG5TEPtFjRo-yM3BgzXZO5PRDSI17bU",
    authDomain: "let-s-chat-3671b.firebaseapp.com",
    projectId: "let-s-chat-3671b",
    storageBucket: "let-s-chat-3671b.appspot.com",
    messagingSenderId: "217847332591",
    appId: "1:217847332591:web:083041011ec8daa714a51a",
    measurementId: "G-SG6XZXNDGZ"};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()

{user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);

window.location="chat_room.html";}






