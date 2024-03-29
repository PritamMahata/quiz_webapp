var firebaseConfig = {
  apiKey: "AIzaSyAfHn9TSpvfwEnc_qjbXt0XB4VGPFWnVkY",
  authDomain: "quiz-c288d.firebaseapp.com",
  databaseURL: "https://quiz-c288d-default-rtdb.firebaseio.com",
  projectId: "quiz-c288d",
  storageBucket: "quiz-c288d.appspot.com",
  messagingSenderId: "500395329413",
  appId: "1:500395329413:web:86f99586086321f80226ec",
  measurementId: "G-TZ45439QKP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();
// var val = document.getElementById("1").Value();
function save() {
  let username = localStorage.getItem("leaderName");
  let sem = localStorage.getItem("semester");
  let score = localStorage.getItem("score");
  database.ref("users/" + sem).set({
    LeaderName: username,
    Score: score,
  });
  // database.ref("users/"+ sem + username).set({
    
  // });
  // alert("Data Saved");
}
