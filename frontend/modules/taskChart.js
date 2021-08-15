import Chart from 'chart.js/auto';
let completed = 0;
let uncompleted = 0;

async function getData() {
    try {
        const response = await fetch('/task-chart-data');
        const json = await response.json()
        for (let i of json) {
             if(i.isComplete === 1)  {
                 completed += 1
             } else {
                 uncompleted += 1
             }
        }
    } catch (error) {
        console.log(error)
    }
}

const dataDefinition = async () => {
    await getData()
    return {
        labels:  [
            'Completas',
            'Não completas'
          ],
        datasets: [{
          label: 'Todas as tarefas',
          backgroundColor:  ['#d3e8d6', '#8aab8f'],
          borderColor: ['#d3e8d6', '#8aab8f'],
          data: [completed, uncompleted],
        }]
      };
}

dataDefinition().then(r => {
    const data = r;
    const config = {
        type: 'doughnut',
        data,
        options: {}
    };
    const myChart = new Chart(
        document.querySelector('#myChart'),
        config
    )
  })

