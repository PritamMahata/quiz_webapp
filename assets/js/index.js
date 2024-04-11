const formContainer = document.getElementById("form_con");
const show_text = document.getElementById("view_text");
const start_btn = document.getElementById("start_btn");

let score = localStorage.getItem("quizScore")
let question_len = 10
window.onload = function () {
  if (localStorage.getItem("isSubmit") == "true") {
    show_text.innerHTML = `
    Quiz Completed
      `;
    formContainer.innerHTML = `
      <center>
      <div class="result" style="display:flex;flex-direction: column;justify-content:center;align-items:center;height: 100%;width: 100%;">
      <p style="font-size: 20px;"> 🎉 Congratulations for completing the quiz! 🎉 </p>
      </div>
      </center>
      `;
    start_btn.style.display = "none";
  }
};
