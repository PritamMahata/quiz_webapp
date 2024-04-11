// function del_time() {
//   localStorage.clear();
//   console.log("time deleted");
// }
// const resetBtn = document.getElementById("rst-btn");

let timerElement_2 = document.getElementById("clock");
// let quiz  = document.getElementsByClassName("question-container");

window.onload = function () {
  setTimer();
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
  let submited = localStorage.getItem("isSubmit");
  let sec = localStorage.getItem("t_time");
  //   console.log(sec);
  let timer = setInterval(function () {
    sec--;
    localStorage.setItem("t_time", sec);
    // console.log(sec);
    if (sec <= 0) {
      clearInterval(timer);
      timerElement_2.style.display = "none";
      quizContainer.innerHTML = `
        <center>
        <h2 style="color: red;">⏱️Time's up!</h2>
        <div class="result" style="display:flex;flex-direction: column;justify-content:center;align-items:center;height: 100%;width: 100%;">
          <h2 style="color: green;"> 🏆 Your Score: ${score}/${questions.length} Correct Answers</h2>
          <p style="font-size: 20px;"> 🎉 Congratulations for completing the quiz! 🎉 </p>
        </div></center>
      `;
      nextButton.style.display = "none";
      // resetBtn.style.display = "block";
    } else {
      // resetBtn.style.display = "none";
      let minutes = Math.floor(sec / 60);
      let seconds = sec % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      timerElement_2.textContent = minutes + ":" + seconds;
    }
  }, 1000);
  if (submited == "true") {
    check();
  }
}
