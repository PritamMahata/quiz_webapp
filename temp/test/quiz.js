const questionElem = document.querySelector(".question");
const option1 = document.querySelector("#l1");
const option2 = document.querySelector("#l2");
const option3 = document.querySelector("#l3");
const option4 = document.querySelector("#l4");
const input_value1 = document.querySelector("#option1");
const input_value2 = document.querySelector("#option2");
const input_value3 = document.querySelector("#option3");
const input_value4 = document.querySelector("#option4");

let q_index = 0;
let mainIndex = 1;
//asssigning localStorage for score calculate
if (
  localStorage.getItem("q1") == null ||
  localStorage.getItem("q1") == "" ||
  localStorage.getItem("q1") == undefined
) {
  for (let i = 1; i <= 10; i++) {
    localStorage.setItem(`q${i}`, 0);
  }
}

if (
  localStorage.getItem("1") == null ||
  localStorage.getItem("1") == "" ||
  localStorage.getItem("1") == undefined
) {
  for (let i = 1; i <= 10; i++) {
    localStorage.setItem(`${i}`, "0");
  }
}

// end localStorage

const questions = [
  {
    question: "I. 1 + 1 = ?",
    options: ["6", "2", "7", "0"],
    answer: "option2",
  },
  {
    question: "II. 5 + 5 = ?",
    options: ["9", "12", "10", "8"],
    answer: "option3",
  },
  {
    question: "III. 1 + 5 = ?",
    options: ["9", "12", "10", "6"],
    answer: "option4",
  },
  {
    question: "IV. 3 + 5 = ?",
    options: ["9", "12", "10", "8"],
    answer: "option4",
  },
  {
    question: "V. 5 + 2 = ?",
    options: ["7", "12", "10", "8"],
    answer: "option1",
  },
  {
    question: "VI. 11 - 1  = ?",
    options: ["9", "12", "10", "8"],
    answer: "option3",
  },
  {
    question: "VII. 0 + 5 = ?",
    options: ["5", "12", "10", "8"],
    answer: "option1",
  },
  {
    question: "VIII. 12 + 5 = ?",
    options: ["9", "17", "10", "8"],
    answer: "option2",
  },
  {
    question: "IX. 5 + 11 = ?",
    options: ["16", "12", "10", "8"],
    answer: "option1",
  },
  {
    question: "X. 1 + 9 = ?",
    options: ["9", "12", "10", "8"],
    answer: "option3",
  },
  // Add more questions here in a similar format
];

function display_question(index) {
  questionElem.innerHTML = `
  <div class="top">
    <h4>Question ${index + 1} out of 10</h4>
  </div>
    <div class="mid">
        <p>${questions[index].question}</p>
    </div>
  `;

  option1.innerHTML = `${questions[index].options[0]}`;
  option2.innerHTML = `${questions[index].options[1]}`;
  option3.innerHTML = `${questions[index].options[2]}`;
  option4.innerHTML = `${questions[index].options[3]}`;

  // check_ans();\
}

// const selectedOption = document.querySelector(
//   'input[name="options"]:checked'
// );
// const storedValue = localStorage.getItem("selectedOption1");
// if (storedValue == ans) {
//   localStorage.setItem("q1", 1);
//   console.log(localStorage.getItem("q1"));
// } else {
//   localStorage.setItem("q1", 0);
// }

// TESTING
// console.log(index);
// console.log(questions[index].options[0]);
// console.log(questions[index].options[1]);
// console.log(questions[index].options[2]);
// console.log(questions[index].options[3]);

function next() {
  let storedValue = "";
  if (q_index >= 10) {
    console.log("last question");
    questionElem.innerHTML = `
    <div class="top">
    <center>Quiz Completed</center> 
    </div>
    `;
  } else {
    q_index++;
    display_question(q_index);
  }

  // for answer checking
  const selectedOption = document.querySelector(
    'input[name="options"]:checked'
  );
  console.log(selectedOption);
  if (selectedOption) {
    localStorage.setItem(`${mainIndex}`, selectedOption.value);
    storedValue = localStorage.getItem(`${mainIndex}`);
    console.log("stored value " + storedValue);
  }

  var ans = questions[q_index-1].answer;
  // console.log("this is ", ans);
  if (localStorage.getItem(`${mainIndex}`) == ans) {
    localStorage.setItem(`q${mainIndex}`, 1);
    console.log("correct");
  } else {
    localStorage.setItem(`q${mainIndex}`, 0);
    console.log("Wrong");
  }
  console.log("ans "+ ans);
  mainIndex++;
}

function previous() {
  if (q_index <= 0) {
    console.log("1st question");
  } else {
    q_index--;
    display_question(q_index);
  }
  mainIndex--;
}

// window.onload = function () {
display_question(0);
// };
function print() {
  let score = 0;
  for (let i = 1; i <= 10; i++) {
    score += localStorage.getItem(`q${i}`)
      ? parseInt(localStorage.getItem(`q${i}`))
      : 0;
  }
  console.log(score);
}

function check_ans(q_index) {
  const selectedOption = document.querySelector(
    'input[name="options"]:checked'
  );
  console.log("selected o" + selectedOption.id);
  let temp = selectedOption.id;
  if (selectedOption) {
    let s_op = `selectedOption${q_index}`;
    localStorage.setItem(s_op, temp);

    const storedValue = localStorage.getItem(selectedOption`${q_index}`);
    console.log("storedValue" + storedValue);
  }

  var ans = questions[q_index].answer;
  console.log("this is " + ans);
  if (localStorage.getItem("selectedOption1") == ans) {
    localStorage.setItem(`q${q_index - 1}`, 1);
    console.log("correct");
  } else {
    localStorage.setItem(`q${q_index - 1}`, 0);
    console.log("Wrong");
  }
  console.log(ans);
}
