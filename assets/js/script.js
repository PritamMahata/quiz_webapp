const questions = [
  {
    question: '<center><img src="../assets/img/hourglass.png"></center>',
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
];

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("clock");

if (
  localStorage.getItem("isSubmit") == null ||
  localStorage.getItem("isSubmit") == "" ||
  localStorage.getItem("isSubmit") == undefined ||
  localStorage.getItem("quizScore") == null ||
  localStorage.getItem("quizScore") == "" ||
  localStorage.getItem("quizScore") == undefined ||
  localStorage.getItem("L_index") == null ||
  localStorage.getItem("L_index") == "" ||
  localStorage.getItem("L_index") == undefined
) {
  localStorage.setItem("isSubmit", false);
  localStorage.setItem("L_index", 0);
  if (localStorage.getItem("quizScore") != 0) {
    localStorage.setItem("quizScore", 0);
  }
}
//  else {
//   localStorage.setItem('isSubmit',false);
// }

let score = 0;
if (localStorage.getItem("quizScore") != 0) {
  score = localStorage.getItem("quizScore");
}
let currentIndex = localStorage.getItem("L_index");
let userResponses = Array(questions.length).fill(null);

function displayQuestion(index) {
  const question = questions[index];
  const options = question.options
    .map(
      (option) =>
        `<label>
    <input type="radio" name="question${index}" value="${option}" ${
          userResponses[index] === option ? "checked" : ""
        }>
    ${option}
    </label>`
    )
    .join("");
  questionContainer.innerHTML = `
          <h2>${question.question}</h2>
          ${options}
      `;
}

function calculateScore() {
  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption) {
      userResponses[index] = selectedOption.value;
      if (selectedOption.value === question.answer && currentIndex < questions.length) {
        score++;
        localStorage.setItem("quizScore", score);
      }
    }
  });
  localStorage.setItem("userResponses", JSON.stringify(userResponses));
}

function endQuiz() {
  if (currentIndex != 0) {
    calculateScore();
    saveCurrentTime("HH:mm:ss");
  }

  // alert(`Time's up! Quiz completed!\nYour score: ${score}`);
  console.log("score:" + score);
  // Clear local storage after displaying the score
  // localStorage.removeItem("quizScore");
  // localStorage.removeItem("userResponses");
  // Submit the quiz (you may need to implement this part)
  // For example:
  // document.getElementById('quiz-form').submit();
  quizContainer.innerHTML = `
  <center>
  <h2 style="color: red;">Quiz completed!</h2>
  <div class="result" style="display:flex;flex-direction: column;justify-content:center;align-items:center;height: 100%;width: 100%;">
    <h2 style="color: green;"> 🏆 Your Score: ${score}/${questions.length} Correct Answers</h2>
    <p style="font-size: 20px;"> 🎉 Congratulations for completing the quiz! 🎉 </p>
  </div></center>
`;
  // localStorage.setItem(timerElement, 0)
  timerElement.style.display = "none";
  nextButton.style.display = "none";
  // resetBtn.style.display = "block";

  save();
}

function init() {
  const storedResponses = JSON.parse(localStorage.getItem("userResponses"));
  if (storedResponses) {
    userResponses = storedResponses;
  }

  displayQuestion(currentIndex);

  nextButton.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
      calculateScore(); // Move the calculateScore() function call here
      currentIndex++;
      localStorage.setItem("L_index", currentIndex);
      displayQuestion(currentIndex);
      console.log("current index"+currentIndex);
      if (currentIndex === questions.length - 1) {
        nextButton.innerText = "Submit";
        currentIndex++;
      }
    } else if (currentIndex === questions.length) {
      localStorage.setItem("isSubmit", "true");
      endQuiz();
    } else {
      console.log("score:" + score);
    }
  }); // Add a closing parenthesis here
} // Remove this closing parenthesis

function check() {
  console.log(localStorage.getItem("isSubmit")); // testing
  if (localStorage.getItem("isSubmit") == "true") {
    endQuiz();
  }
}

init();
// check();
