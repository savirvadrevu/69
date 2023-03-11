
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA4BgjkpeHTc1MjKqECPdpQemQy2_6ki7Y",
      authDomain: "kwitter-e326a.firebaseapp.com",
      databaseURL: "https://kwitter-e326a-default-rtdb.firebaseio.com",
      projectId: "kwitter-e326a",
      storageBucket: "kwitter-e326a.appspot.com",
      messagingSenderId: "436780234154",
      appId: "1:436780234154:web:414387d7fc97dbb504a7d3"
    };

    //initialise firebase
    firebase.initializeApp(firebaseConfig)
    {
      
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
//suuuuiiiiiiiiiiiiiii