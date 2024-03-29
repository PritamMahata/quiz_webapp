const bottom = document.querySelector(".bottom");
var timerElement = document.getElementById("timestamp");

window.onload = function () {
  setTimer();
  checkTime();
  // setInterval(setTimer, 5000);
};
if (
  localStorage.getItem("t_time") == null ||
  localStorage.getItem("t_time") == "" ||
  localStorage.getItem("t_time") == undefined
) {
  localStorage.setItem("t_time", 120);
} else {
  setTimer();
}

function setTimer() {
  var sec = localStorage.getItem("t_time");
  console.log(sec);
  var timer = setInterval(function () {
    sec--;
    localStorage.setItem("t_time", sec);
    console.log(sec);
    if (sec <= 0) {
      clearInterval(timer);
      bottom.innerHTML = `
            <div class="result" style="background-color: #f2f2f2; padding: 20px; border-radius: 5px; display:flex; flex-direction: column; justify-content:center; align-items:center; width:100%;">
                <h2> Time Up</h2>
                <h5>  🏆 Your Score: ${print_score()}/10</h5>
                <p> 🎉 Congratulations for completing the quiz! 🎉 </p>
            </div>
        `;
    } else {
      // document.getElementById('countdown').innerHTML = sec + " seconds remaining";
      var minutes = Math.floor(sec / 60);
      var seconds = sec % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerElement.textContent = minutes + ":" + seconds;
    }
  }, 1000);
}

// localStorage.setItem('t_time',120);
// var sec = localStorage.getItem('t_time');
// console.log(sec);

function checkTime() {
  console.log("Checking time...");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;
  // console.log(timeString);
  // Define the start and end times to show/hide the text
  var startTimeToShow = "16:34:00"; // Example: Show text from 8:00 AM
  var endTimeToHide = "16:35:00"; // Example: Hide text from 5:00 PM

  if (timeString >= startTimeToShow && timeString <= endTimeToHide) {
    console.log("Time to show the text");
    document.getElementById("timestamp").innerText = timeString;
  } else {
    console.log("Time to hide the text");
    document.getElementById("timestamp").innerText = "00 : 00";
    print_score();
    save(); //firebase data save
  }
}
