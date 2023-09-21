const punteggioRecuperato = localStorage.getItem("punteggio");

const giuste = punteggioRecuperato;
const sbagliate = 10 - punteggioRecuperato;

const data = {
  labels: ["Corrects", "Wrongs"],
  datasets: [
    {
      label: "My First Dataset",
      data: [giuste, sbagliate],
      backgroundColor: ["#00FFFFFF", "#900080"],
      hoverOffset: 0,
      borderWidth: 0,
      cutout: "80%",
      radius: "100%",
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  option: {
    elements: {
      arc: {},
    },
  },
};

const grafico = function () {
  const containergrafico = document.getElementsByClassName("grafico");
  const grafico = new Chart(containergrafico, config);
};

grafico();

const messaggio = function () {
  if (punteggioRecuperato >= 6) {
    let divNotPassed = document.getElementById("notpassed");
    divNotPassed.style.display = "none";
  } else {
    let divPassed = document.getElementById("passed");
    divPassed.style.display = "none";
  }
};
messaggio();

const returnCorrectPercentage = function () {
  let percentage = (punteggioRecuperato / 10) * 100;
  let percentageString = percentage.toString();
  let correctH1 = document.getElementById("correct-percentage");
  correctH1.innerText = percentageString + "%";
};
returnCorrectPercentage();

const returnWrongPercentage = function () {
  let percentage = (punteggioRecuperato / 10) * 100;
  let wrongPercentage = 100 - percentage;
  let percentageString = wrongPercentage.toString();
  let wrongH1 = document.getElementById("wrong-percentage");
  wrongH1.innerText = percentageString + "%";
};
returnWrongPercentage();

let correctP = document.getElementById("correct-p");
correctP.innerText = punteggioRecuperato + "/10 questions";
// Da aggiungere tot domande

let wrongP = document.getElementById("wrong-p");
wrongP.innerText = 10 - punteggioRecuperato + "/10 questions";
// Da aggiungere tot domande
