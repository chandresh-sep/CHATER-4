
const firebaseConfig = {
      apiKey: "AIzaSyDfSOMY6qSw_aL29ypEK0MFtS5tf6WLFRU",
      authDomain: "class-test-e7a3a.firebaseapp.com",
      projectId: "class-test-e7a3a",
      storageBucket: "class-test-e7a3a.appspot.com",
      messagingSenderId: "150526121531",
      appId: "1:150526121531:web:4dc7409813b1d38a9aee1e"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
