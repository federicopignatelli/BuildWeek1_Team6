const giuste = 4
const sbagliate = 10 - giuste


const data = {
    labels: [
        'Wrongs',
        'Corrects',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [giuste, sbagliate],
        backgroundColor: [
            '#900080',
            '#00FFFFFF',
        ],
        hoverOffset: 0,
        borderWidth: 0,
    }]
};

const config = {
    type: 'doughnut',
    data: data,
}

const grafico = function () {
    const graficocanvas = document.getElementsByClassName("grafico");
    const grafico = new Chart(graficocanvas, config)

}

grafico()