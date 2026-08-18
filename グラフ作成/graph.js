let lineCtx = document.getElementById("lineChart");
    // 線グラフの設定
    let lineConfig = {
      type: 'line',
      data: {
        // ※labelとデータの関係は得にありません
        labels: ['100', '90', '80', '70', '60', '50', '40', '30', '20', '10', '0'], //縦のラベル
        datasets: [{
          label: 'Red(fore)',
          data:[{x: 20, y: 0},
                {x: 40, y: 30},
                {x: 50, y: 10},
            ],
          borderColor: '#f88',
          fill: false,
        }, {
          label: 'Green(middle)',
          data: [20, 15, 30, 25, 30, 40, 35],
          borderColor: '#484',
        }, {
          label: 'Blue(third)',
          data: [30, 25, 10, 5, 25, 30, 20],
          borderColor: '#48f',
        },{
          label: 'yellow(little)',
          data: [30, 25, 10, 5, 25, 30, 20],
          borderColor: '#ffe900',
        },{
          label: 'purple(thumb)',
          data: [30, 25, 10, 5, 25, 30, 20],
          borderColor: '#8300ff',
        },{
          label: 'orange(sonota)',
          data: [30, 25, 10, 5, 25, 30, 20],
          borderColor: '#ff5500',
        },{
            label: 'gray(marker)',
          data: [, , , , , , 0, 5, 1,],
          borderColor: '#aaa',
        }],
      },
      options: {
    indexAxis: 'y', // 軸を入れ替える
    scales: {
      //横のラベル
      x: {
        suggestedMin: -70,
        suggestedMax: 70,
        ticks: {
        stepSize: 10,
        }
      }
        },
      },
    };
    let lineChart = new Chart(lineCtx, lineConfig);