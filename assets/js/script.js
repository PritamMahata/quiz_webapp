const questions = [
  {
    question: '<center><img src="../assets/img/Question1.jpeg"></center><br/><center>Which Programming Language is this?</center>',
    options: ["Ruby", "Rust", "Swift", "Kotlin"],
    answer: "Swift",
  },

  {
    question: "What startup, acquired by Facebook for $1 billion in 2012, became the fourth most downloaded app in the 2010s and is known for the posting of pictures?",
    options: ["Twitter", "Whatsapp", "Instagram", "Snapchat"],
    answer: "Instagram",
  },

  {
    question: "What are the two types of software?",
    options: ["Application and os", "Application and system", "Apllication and Administrative", "User and system"],
    answer: "Application and system",
  },

  {
    question: "What is the first OTT platform in India?",
    options: ["nexGTv", "Alt Balaji", "Zee5", "Hotstar"],
    answer: "ALt Balaji",
  },

  {
    question: "Which is the most popular language for game development?",
    options: ["Python", "C++", "C#", "Javascript"],
    answer: "C++",
  },

  {
    question: "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    options: ["Flash", "Flange", "Fury", "FRAM"],
    answer: "Flash",
  },

  {
    question: "What is the full for of OTT?",
    options: ["On The Top", "Over The Top", "Out of The Top", "None of the above"],
    answer: "Over The Top",
  },

  {
    question: "Which Programming language runs on the browser?",
    options: ["Java", "Javascript", "Python", "Ruby"],
    answer: "Javascript",
  },

  {
    question: '<center><img src="../assets/img/CompanyLogo.png"></center><br/><center>Which Company Logo is this?</center>',
    options: ["LOTEC", "Tesla", "INVICTA", "Gemballa"],
    answer: "Tesla",
  },

  {
    question: "A blue wavy line in Microsoft Word indicates which error?",
    options: [
      "Spelling",
      "Grammar",
      "Formatting",
      "Capitalization",
    ],
    answer: "Formatting",
  }
];


let dataSaved = false;
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
let currentIndex = parseInt(localStorage.getItem("L_index"));
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
      if (selectedOption.value === question.answer) {
        score++;
        localStorage.setItem("quizScore", score);
      }
    }
  });
  localStorage.setItem("userResponses", JSON.stringify(userResponses));
}

function endQuiz() {
  dataSaved = true;
  if (currentIndex === questions.length) {
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
      console.log(
        "current index" + currentIndex + localStorage.getItem("L_index")
      );
      displayQuestion(currentIndex);
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

window.addEventListener('beforeunload', function(event) {
  if (!dataSaved) {
      event.returnValue = "Your Score is not saved yet. Are you sure you want to leave the page?";
  }
});

init();
