var firebaseConfig = {
    apiKey: "AIzaSyA2lRWnFYBZWTjD7M5QG5vgHlb5l1d5bKc",
    authDomain: "kwitter-30-dec.firebaseapp.com",
    databaseURL: "https://kwitter-30-dec-default-rtdb.firebaseio.com",
    projectId: "kwitter-30-dec",
    storageBucket: "kwitter-30-dec.appspot.com",
    messagingSenderId: "667788167050",
    appId: "1:667788167050:web:9a9ac0b59967905add6a73"
  };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function join_room()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose:"ading room name"

});
localStorage.setItem("room_name",room_name);
window.location="future_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"; 
document.getElementById("output").innerHTML+=row;
});});};getData();
function redirectToRoomName(name)
{
localStorage.setItem("room_name",name);
window.location="future_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}