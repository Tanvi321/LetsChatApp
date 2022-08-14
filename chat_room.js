var firebaseConfig={
  apiKey: "AIzaSyBorG5TEPtFjRo-yM3BgzXZO5PRDSI17bU",
  authDomain: "let-s-chat-3671b.firebaseapp.com",
  projectId: "let-s-chat-3671b",
  storageBucket: "let-s-chat-3671b.appspot.com",
  messagingSenderId: "217847332591",
  appId: "1:217847332591:web:083041011ec8daa714a51a",
  measurementId: "G-SG6XZXNDGZ"};

  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name").value;
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!!!";

function addRoom()
{room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({purpose:"adding room name"});
localStorage.setItem("room_name", room_name);
window.location="room_page.html";}

function getData() 

{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

    Room_names = childKey;
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick=' redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row; });});}


getData;
function redirectToRoomName(name)
{console.log(name);
localStorage.setItem("room_name", name);
window.location="room_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

