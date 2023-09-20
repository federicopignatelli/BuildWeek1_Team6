const giuste = 5;
//  punteggioRecuperato
const sbagliate = 10 - giuste;

const data = {
  labels: ["Wrongs", "Corrects"],
  datasets: [
    {
      label: "My First Dataset",
      data: [giuste, sbagliate],
      backgroundColor: ["#900080", "#00FFFFFF"],
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
  const punteggioRecuperato = localStorage.getItem(punteggio);
  if (punteggioRecuperato >= 6) {
    let divNotPassed = document.getElementById("notpassed");
    divNotPassed.setAttribute("id", "sparisce");
    divNotPassed.style.display = "none";
  } else {
    let divPassed = document.getElementById("passed");
    divPassed.setAttribute("id", "sparisce");
    divPassed.style.display = "none";
  }
};
messaggio();
