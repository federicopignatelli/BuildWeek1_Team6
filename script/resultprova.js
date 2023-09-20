const giuste = 5
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
        cutout: '80%',
        radius: '100%',
    }]
};

const config = {
    type: 'doughnut',
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
            arc: {
            },
        }
    }
}

const grafico = function () {
    const containergrafico = document.getElementsByClassName("grafico");
    const grafico = new Chart(containergrafico, config)
}

grafico()

