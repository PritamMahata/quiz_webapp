var firebaseConfig = {
    apiKey: String(import.meta.env.API_KEY),
    authDomain: String(import.meta.env.AUTH_DOMAIN),
    databaseURL: String(import.meta.env.DATABASE_URL),
    projectId: String(import.meta.env.PROJECT_ID),
    storageBucket: String(import.meta.env.STORAGE_BUCKET),
    messagingSenderId: String(import.meta.env.MESSAGING_SENDER_ID),
    appId: String(import.meta.env.API_ID),
    measurementId: String(import.meta.env.MEASUREMENT_ID),
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
  