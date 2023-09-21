const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Inside which HTML element do we put the JavaScript?",
    correct_answer: "<script>",
    incorrect_answers: ["<scripting>", "<javascript>", "<js>"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Where is the correct place to insert a JavaScript?",
    correct_answer:
      "Both the <head> section and the <body> section are correct  ",
    incorrect_answers: [
      "The <body> section",
      "The <head> section",
      "none of the above",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The external JavaScript file must contain the <script> tag.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Is JavaScript case-sensitive?",
    correct_answer: "Yes",
    incorrect_answers: ["No"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What will the following code return: Boolean(10 > 9)",
    correct_answer: "true",
    incorrect_answers: ["NaN", "false", "Null"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which operator is used to assign a value to a variable?",
    correct_answer: "=",
    incorrect_answers: ["x", "-", "*"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How do you declare a JavaScript variable?",
    correct_answer: "var carName;",
    incorrect_answers: ["variable carName;", "v carName;", "variable carName"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Which event occurs when the user clicks on an HTML element?",
    correct_answer: "onclick",
    incorrect_answers: ["onchange", "onmouseover", "onmouseclick"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "JavaScript is the same as Java.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How do you find the number with the highest value of x and y?",
    correct_answer: "Math.max(x, y)",
    incorrect_answers: ["top(x, y)", "Math.ceil(x, y)", "ceil(x, y)"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is a server-side Java Script object?",
    correct_answer: "File",
    incorrect_answers: ["FileUpload", "Date", "Function"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Java script can be used for Storing the form's contents to a database file on the server",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "C-style block-level scoping is not supported in Java script",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is the tainted property of a window object in Java Script?",
    correct_answer: "Defaultstatus",
    incorrect_answers: ["Pathname", "Protocol", "Host"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is not a valid JavaScript variable name?",
    correct_answer: "2java",
    incorrect_answers: [
      "_java_and_ java _names",
      "javaandjava",
      "None of the above",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "Which of the ways below is incorrect of instantiating a date?",
    correct_answer: "new Date(seconds)",
    incorrect_answers: ["new Date(dateString)", "new Date()", "new Date(year)"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the alternate name for Java script?",
    correct_answer: "ECMAScript",
    incorrect_answers: ["LimeScript", "Both a and d", "ECMScript"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Java Script supports all boolean operators",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "How to append a value to an array of Java Script?",
    correct_answer: "arr[arr.length] = value",
    incorrect_answers: [
      "arr[arr.length+1] = new Arrays()",
      "arr[arr.length-1] = value",
      "arr[arr.length*1] = value",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
    correct_answer: "Eval",
    incorrect_answers: ["ParseDoule", "ParseObject", "Efloat"],
  },
];

let punteggio = 0;

let numeroDomanda = 0;

let divQuiz;

let difficoltàSelezionata = null;

const easyButton = document.getElementById("easy-button");
const mediumButton = document.getElementById("medium-button");
const hardButton = document.getElementById("hard-button");

easyButton.addEventListener("click", () => mostraDomandePerDifficoltà("easy"));
mediumButton.addEventListener("click", () =>
  mostraDomandePerDifficoltà("medium")
);
hardButton.addEventListener("click", () => mostraDomandePerDifficoltà("hard"));

const mostraDomandePerDifficoltà = function (difficoltà) {
  difficoltàSelezionata = difficoltà;
  easyButton.style.display = "none";
  mediumButton.style.display = "none";
  hardButton.style.display = "none";
  document.querySelector("main p").style.display = "none";
  document.querySelector("#question-number").style.display = "block";

  mostraDomanda(0);
};

function randomSort(a, b) {
  return Math.random() - 0.5;
}

const mostraDomanda = function (i) {
  if (i >= questions.length) {
    localStorage.setItem("punteggio", punteggio);
    window.location.href = "result.html";
  }

  if (divQuiz) {
    divQuiz.innerHTML = "";
  }

  let risposte = [
    ...questions[i].incorrect_answers,
    questions[i].correct_answer,
  ];

  risposte.sort(randomSort);

  if (questions[i].difficulty !== difficoltàSelezionata) {
    mostraDomanda(i + 1);
    return;
  }

  let pDom1 = document.createElement("p");
  pDom1.innerText = questions[i].question;
  let divX = document.createElement("div");

  for (let y = 0; y < risposte.length; y++) {
    let nuovoPulsante = document.createElement("button");
    nuovoPulsante.classList.add("box-answer");
    nuovoPulsante.innerText = risposte[y];
    nuovoPulsante.addEventListener("click", function () {
      if (risposte[y] === questions[i].correct_answer) {
        punteggio++;
      }

      document.querySelector("footer p").innerHTML = `Question ${
        numeroDomanda + 2
      }<span>/10</span>`;
      numeroDomanda++;
      mostraDomanda(i + 1);
    });
    divQuiz.appendChild(pDom1);
    pDom1.appendChild(divX);
    divX.appendChild(nuovoPulsante);
  }
  console.log(punteggio);
};

window.onload = function () {
  divQuiz = document.querySelector(".domande");
};
