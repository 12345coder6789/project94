
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA8vR2KMywUtyFp1pAeOmkRnqZZUAU2YOk",
    authDomain: "social-web-app-8bbf6.firebaseapp.com",
    databaseURL: "https://social-web-app-8bbf6-default-rtdb.firebaseio.com",
    projectId: "social-web-app-8bbf6",
    storageBucket: "social-web-app-8bbf6.appspot.com",
    messagingSenderId: "93092201293",
    appId: "1:93092201293:web:f194925722b0adac5bad04",
    measurementId: "G-LF3DMB16H0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}