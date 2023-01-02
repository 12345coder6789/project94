function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }


    var firebaseConfig = {
        apiKey: "AIzaSyDgQs-suilEeHonwbs4dWPKgMHmWQJI_jQ",
        authDomain: "kwitter94-fd65e.firebaseapp.com",
        projectId: "kwitter94-fd65e",
        storageBucket: "kwitter94-fd65e.appspot.com",
        messagingSenderId: "815362002464",
        appId: "1:815362002464:web:6c5068e333c684c463f645",
        measurementId: "G-8NRYE68HMF"
      };
      
      // Initialize Firebase
     app = initializeApp(firebaseConfig);
   
