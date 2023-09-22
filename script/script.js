const questionsMedium = [
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
];
const questionsEasy = [
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
];
const questionsHard = [
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

let primaDomandaVisualizzata = false;

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
  if (
    i >= questionsEasy.length ||
    i >= questionsMedium.length ||
    i >= questionsHard.length
  ) {
    localStorage.setItem("punteggio", punteggio);
    window.location.href = "result.html";
  }
  resetTimer();
  if (difficoltàSelezionata === "easy") {
    if (divQuiz) {
      divQuiz.innerHTML = "";
    }

    let risposte = [
      ...questionsEasy[i].incorrect_answers,
      questionsEasy[i].correct_answer,
    ];

    risposte.sort(randomSort);

    let pDom1 = document.createElement("p");
    pDom1.innerText = questionsEasy[i].question;
    let divX = document.createElement("div");

    for (let y = 0; y < risposte.length; y++) {
      let nuovoPulsante = document.createElement("button");
      nuovoPulsante.classList.add("box-answer");
      nuovoPulsante.innerText = risposte[y];
      nuovoPulsante.addEventListener("click", function () {
        if (risposte[y] === questionsEasy[i].correct_answer) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          punteggio++;
        } else {
          Swal.fire({
            icon: "error",
            title: "wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        document.querySelector("footer p").innerHTML = `Question ${
          numeroDomanda + 2
        }<span>/10</span>`;
        numeroDomanda++;
        i++;
        mostraDomanda(i);
      });
      divQuiz.appendChild(pDom1);
      pDom1.appendChild(divX);
      divX.appendChild(nuovoPulsante);
    }
  }
  if (difficoltàSelezionata === "medium") {
    if (divQuiz) {
      divQuiz.innerHTML = "";
    }

    let risposte = [
      ...questionsMedium[i].incorrect_answers,
      questionsMedium[i].correct_answer,
    ];

    risposte.sort(randomSort);

    let pDom1 = document.createElement("p");
    pDom1.innerText = questionsMedium[i].question;
    let divX = document.createElement("div");

    for (let y = 0; y < risposte.length; y++) {
      let nuovoPulsante = document.createElement("button");
      nuovoPulsante.classList.add("box-answer");
      nuovoPulsante.innerText = risposte[y];
      nuovoPulsante.addEventListener("click", function () {
        if (risposte[y] === questionsMedium[i].correct_answer) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          punteggio++;
        } else {
          Swal.fire({
            icon: "error",
            title: "wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        document.querySelector("footer p").innerHTML = `Question ${
          numeroDomanda + 2
        }<span>/10</span>`;
        numeroDomanda++;
        i++;
        mostraDomanda(i);
      });
      divQuiz.appendChild(pDom1);
      pDom1.appendChild(divX);
      divX.appendChild(nuovoPulsante);
    }
  }
  if (difficoltàSelezionata === "hard") {
    if (divQuiz) {
      divQuiz.innerHTML = "";
    }

    let risposte = [
      ...questionsHard[i].incorrect_answers,
      questionsHard[i].correct_answer,
    ];

    risposte.sort(randomSort);

    let pDom1 = document.createElement("p");
    pDom1.innerText = questionsHard[i].question;
    let divX = document.createElement("div");

  for (let y = 0; y < risposte.length; y++) {
    let nuovoPulsante = document.createElement("button");
    nuovoPulsante.classList.add("box-answer");
    nuovoPulsante.innerText = risposte[y];
    nuovoPulsante.addEventListener("click", function () {
      if (risposte[y] === questions[i].correct_answer) {
      let timerInterval
      Swal.fire({
      icon: "success",
      title: 'Corret!!!',
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
        punteggio++;
      } else {
        // alert("sbagliato");
        Swal.fire({
          icon: "error",
          title: 'WRONG!!!!',
          background: '#900080;',
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        
      }

      document.querySelector("footer p").innerHTML = `Question ${
        numeroDomanda + 2
      }<span>/10</span>`;
      numeroDomanda++;
      i++;
      mostraDomanda(i);
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

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 20;

const COLOR_CODES = {
  info: {
    color: "green",
  },
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
  timeLeft
)}</span>
</div>
`;

function startTimer() {
  document.querySelector("#timer").style.display = "block";
  timerInterval = setInterval(() => {
    timePassed = timePassed + 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    if (difficoltàSelezionata === "medium") {
      if (timeLeft === 0) {
        if (numeroDomanda >= 9) {
          window.location.href = "result.html";
        } else {
          numeroDomanda++;
          const questionNumberElement = document.querySelector("footer p");
          questionNumberElement.innerHTML = `Question ${
            numeroDomanda + 1
          }<span>/10</span>`;
          mostraDomanda(numeroDomanda);
        }
      }
    }
    if (difficoltàSelezionata === "easy") {
      if (timeLeft === 0) {
        if (numeroDomandaEasy >= 19) {
          window.location.href = "result.html";
        } else {
          numeroDomandaEasy++;
          numeroDomanda++;
          const questionNumberElement = document.querySelector("footer p");
          questionNumberElement.innerHTML = `Question ${
            numeroDomanda + 1
          }<span>/10</span>`;
          mostraDomanda(numeroDomandaEasy);
        }
      }
    }
    if (difficoltàSelezionata === "hard") {
      if (timeLeft === 0) {
        if (numeroDomandaHard >= 29) {
          window.location.href = "result.html";
        } else {
          numeroDomandaHard++;
          numeroDomanda++;
          const questionNumberElement = document.querySelector("footer p");
          questionNumberElement.innerHTML = `Question ${
            numeroDomanda + 1
          }<span>/10</span>`;
          mostraDomanda(numeroDomandaHard);
        }
      }
    }
    setCircleDasharray();
  }, 1000);
}
function resetTimer() {
  clearInterval(timerInterval);
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  // Riparte il timer
  startTimer();
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `<p style="font-size: 0.8em">SECONDS 
  ${seconds} <br>
  REMAINING`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
