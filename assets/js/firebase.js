var firebaseConfig = {
  // your firebase configuration
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
function save() {
  let username = localStorage.getItem("leaderName").toUpperCase();
  let sem = localStorage.getItem("semester");
  let score = localStorage.getItem("quizScore");
  let realTime = localStorage.getItem("currentTime");
  database.ref("users/" + sem + "/" + username).set({
    Score: score,
    Submit_Time: realTime,
  });
}
