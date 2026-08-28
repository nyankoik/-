const ctx = document.getElementById('line_chart').getContext('2d');


// ドラッグ開始時の位置を保存
let dragStartX = 0;
let dragStartY = 0;

let dragStart_X = 0;
let dragStart_Y = 0;

const finger = {
  fore: 0,   // 人差し指
  middle: 1,  // 中指
  third: 2, // 薬指
  little: 3,   // 小指
  thumb: 4  //　親指
};

const datum = 0  //基準（手首）

const root = 1  //指の付け根
const root_start = 0 //付け根のはじめ
const root_end = 1  //付け根の終わり
const roots = 5 //付け根全体

const config = {
  type: 'line',

  data: {
    datasets: [
      {
        label: '人差し指',
        data: [
          { x: 0, y: 0 },
          { x: -25, y: 75 },
          { x: -30, y: 95 },
          { x: -35, y: 115 },
          { x: -40, y: 135 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgb(143, 69, 85)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      },{
        label: '中指',
        data:[
          { x:0, y:0 },
          { x:-5, y:80 },
          { x:-7, y:105 },
          { x:-9, y:130 },
          { x:-11, y:155 },
        ],
        backgroundColor: 'rgba(255, 224, 99, 0.7)',
        borderColor: 'rgb(143, 117, 69)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      },{
        label: '薬指',
        data:[
          { x:0, y:0 },
          { x:15, y:75 },
          { x:17, y:100 },
          { x:19, y:125 },
          { x:21, y:150 },
        ],
        backgroundColor: 'rgba(99, 133, 255, 0.7)',
        borderColor: 'rgb(69, 84, 143)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      },
      {
        label: '小指',
        data: [
          { x: 0, y: 0 },
          { x: 30, y: 65 },
          { x: 35, y: 80 },
          { x: 40, y: 95 },
          { x: 45, y: 110 },
        ],
        backgroundColor: 'rgba(99, 255, 135, 0.7)',
        borderColor: 'rgb(69, 143, 85)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      },{
        label: '親指',
        data: [
          { x: 0, y: 0 },
          { x: -50, y: 50 },
          { x: -55, y: 70 },
          { x: -60, y: 90 },
        //{ x: null, y: null},
        ],
        backgroundColor: 'rgba(232, 99, 255, 0.7)',
        borderColor: 'rgb(143, 69, 138)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      },{
        label: '付け根',
        data: [
          //{x: null, y: null},
          { x: -25, y: 75 },
          { x: 30, y: 65 },
        ],
        backgroundColor: 'rgba(99, 213, 255, 0.7)',
        borderColor: 'rgb(69, 131, 143)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      }
    ]
  },

  options: {
    
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        min: -100,
        max: 100,
        ticks: {
          stepSize: 10
        },
        title: {
          display: true,
          text: 'X 軸 (単位)'
        }
      },

      y: {
        min: 0,
        max: 200,
        title: {
          display: true,
          text: 'Y 軸 (単位)'
        },
        ticks: {
          stepSize: 10
        }
      }
    },

    plugins: {
      dragData: {
        round: 1, //小数点を第一位に丸める
        dragX: true,
        dragY: true,
        showTooltip: true,

        //index : 対象の点がどの点か(dataのうちの何番目の要素か)
        //value : 対象の点の数値（座標）
        onDragStart: function (e, datasetIndex, index, value) {

          // ドラッグ開始時の(動かした点の)座標を保存
          dragStartX = value.x;
          dragStartY = value.y;

          dragStart_X = value.x;
          dragStart_Y = value.y;

          e.target.style.cursor = 'grabbing';
        },

        onDrag: function (e, datasetIndex, index, value) {

          if(datasetIndex === 1){
          console.log("hi")
          console.log(datasetIndex)
          };

          // ドラッグ開始位置からの移動量を求める
          const dx = value.x - dragStartX;
          const dy = value.y - dragStartY;

          const dx_1 = value.x - dragStart_X;
          const dy_1 = value.y - dragStart_Y;

          // 手首を結合して動かせるようにする
          //手首を動かしたとき、
          if (index === datum && datasetIndex <= 4) {

          //それぞれの手首の座標を取得
          const datum_f = 
            myChart.data.datasets[finger.fore].data[datum];

          const datum_m =
            myChart.data.datasets[finger.middle].data[datum];
          
          const datum_t =
            myChart.data.datasets[finger.third].data[datum];

          const datum_l =
            myChart.data.datasets[finger.little].data[datum];

          const datum_thumb =
            myChart.data.datasets[finger.thumb].data[datum];

          // 対応する点（各指の一番下の点）を同じ量だけ移動させる
          datum_f.x += dx;
          datum_f.y += dy;

          datum_m.x += dx;
          datum_m.y += dy;

          datum_t.x += dx;
          datum_t.y += dy;

          datum_l.x += dx;
          datum_l.y += dy;

          datum_thumb.x += dx;
          datum_thumb.y += dy;

          // 現在位置を次の基準にする
          dragStartX = value.x;
          dragStartY = value.y;

          // グラフを更新
          myChart.update('none');
          }


          
          //
          //付け根連動
          if (datasetIndex == roots){

            if(index == root_start){

              const root_f = 
                myChart.data.datasets[finger.fore].data[root];
              
              root_f.x += dx;
              root_f.y += dy;

              dragStartX = value.x;
              dragStartY = value.y;

              myChart.update('none');

            } else if(index == root_end){
                const root_l =
                  myChart.data.datasets[finger.little].data[root];

              // 対応する点（各指の一番下の点）を同じ量だけ移動させる
                root_l.x += dx;
                root_l.y += dy;

              //現在位置を次の基準にする
              dragStartX = value.x;
              dragStartY = value.y;

              myChart.update('none');
            }
          }

 
          
          
          

          
            
            
                       console.log(datasetIndex, index)



        },

        onDragEnd: function (e, datasetIndex, index, value) {
          e.target.style.cursor = 'default';


          console.log()

          // 座標一覧を更新
          updateCoordList();
          
          console.log(
            'ドラッグ終了:',
            datasetIndex,
            index,
            value
          );
        },

        onHover: function (e) {
          e.target.style.cursor = 'grab';

          
        }
      },

      tooltip: {
        callbacks: {
          label: function(context) {
            return `(${context.raw.x}, ${context.raw.y})`;
          }
        }
      }
    }
  }
};

const myChart = new Chart(ctx, config);

const BUTTON_CLICK_EVENT= document.getElementById('feed_b');
BUTTON_CLICK_EVENT.addEventListener('click', () => {
            alert("ボタンがクリックされました");
        });


//グラフから指の座標を取得・表として表示

// ========================================
// 座標取得
// ========================================

function getFingerCoord() {

  //datasetsを取得
  const datasets = myChart.data.datasets;

 // datasetsから、それぞれの指のdata（x,y）を取得
  return {
    fore: datasets[finger.fore].data,
    middle: datasets[finger.middle].data,
    third: datasets[finger.third].data,
    little: datasets[finger.little].data,
    thumb: datasets[finger.thumb].data,
  };
}
    
// console.log(getFingerCoord())


// ========================================
// HTMLに座標を表示
// ========================================

function updateCoordList() {

  //取得した指の座標を別の変数に代入
  const coord = getFingerCoord();

  //表のデータを取得
  const table_body =
    document.getElementById('coord_table_body');

  // 一度、表の中身を全部削除
  table_body.innerHTML = '';


  // 表示する指の名称と座標をまとめる
  const fingers = [
    {
      name: '人差し指',
      points: coord.fore
    },
    {
      name: '中指',
      points: coord.middle
    },
    {
      name: '薬指',
      points: coord.third
    },
    {
      name: '小指',
      points: coord.little
    },
    {
      name: '親指',
      points: coord.thumb
    }
  ];


  // 各指について処理
  //表示するものとしてまとめた変数から、順番に処理していく指をfingerとして指定していく
  fingers.forEach(finger => {

    //まとめた変数から座標と取得した点の番号を取得
    //fingers > [x](finger) > points
    finger.points.forEach((point, index) => {

      //表を作成・名称と座標の代入
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${finger.name}</td>
        <td>P${index}</td>
        <td>${point.x}</td>
        <td>${point.y}</td>
      `;

      // console.log(finger)

      table_body.appendChild(row);
    });
  });
}


