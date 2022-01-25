
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAEDfojxFMWLyBMgfUvvmq5c-yIlipUxO0",
      authDomain: "kwitter-7bb4d.firebaseapp.com",
      projectId: "kwitter-7bb4d",
      storageBucket: "kwitter-7bb4d.appspot.com",
      messagingSenderId: "767157351939",
      appId: "1:767157351939:web:1deaa9d7c38c4879c50036"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
