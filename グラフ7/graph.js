const ctx = document.getElementById('line_chart').getContext('2d');
(window.onload = function(){

})();

// ドラッグ開始時の位置を保存
let dragStartX = 0;
let dragStartY = 0;

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

const first_webspace = 6 //第一指間腔（親指と人差し指の間）
const first_webspace_start = 0 // 第一指間腔のはじめ
const first_webspace_end = 1 //第一指間腔の終わり

//関節点
const joint = {
  third: 1,
  second: 2,
  first: 3,
  tip: 4,

  //親指
  thumb: {
    second: 1,
    first: 2,
    tip: 3
  }
}

//指の長さ
let length = {
  //人差し指
  fore: {
    third_second: 0,
    second_first: 0,
    first_tip: 0,
  },

  //中指
  middle: {
    third_second: 0,
    second_first: 0,
    first_tip: 0,
  },

  //薬指
  third: {
    third_second: 0,
    second_first: 0,
    first_tip: 0,
  },

  //小指
  little: {
    third_second: 0,
    second_first: 0,
    first_tip: 0,
  },

  //親指
  thumb: {
    second_first: 0,
    first_tip: 0,
  },

  root: {
    fore_little: 0, //人差し指付け根～小指
    thumb_fore: 0, //第一指間腔
    datum_middle: 0, //手首～中指付け根
    datum_thumb: 0, //手首～親指付け根
  },
}

const collect_length = {
  joint:{
    fore:{
      t_s: 20.5,
      s_f: 20.5,
      f_t: 20.5,
    },
    middle:{
      t_s: 25,
      s_f: 25,
      f_t: 25,
    },
    third:{
      t_s: 25,
      s_f: 25,
      f_t: 25,
    },
    little:{
      t_s: 15.5,
      s_f: 15.5,
      f_t: 15.5,
    },
    thumb:{
      s_f: 20.5,
      f_t: 20.5,
    }
  },
  root:{
    f_l: 55.5,
    t_f: 35,
    d_m: 80,
    d_t: 70.5,
  }
}

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
      },{
        label: '第一指間腔',
        data: [
          { x: -50, y: 50 },
          { x: -25, y: 75 },
        ],
        backgroundColor: 'rgba(99, 230, 255, 0.7)',
        borderColor: 'rgb(69, 151, 143)',
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

          e.target.style.cursor = 'grabbing';
        },

        onDrag: function (e, datasetIndex, index, value) {

          // ドラッグ開始位置からの移動量を求める
          const dx = value.x - dragStartX;
          const dy = value.y - dragStartY;

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

          //付け根連動
          if (index == root){

            if(datasetIndex == finger.fore){

              const root_s = 
                myChart.data.datasets[roots].data[root_start];

              const first_webspace_e =
                myChart.data.datasets[first_webspace].data[first_webspace_end];
              
              root_s.x += dx;
              root_s.y += dy;

              first_webspace_e.x += dx;
              first_webspace_e.y += dy;

              dragStartX = value.x;
              dragStartY = value.y;

              myChart.update('none');

            } else if(datasetIndex == finger.little){
                const root_e =
                  myChart.data.datasets[roots].data[root_end];

              // 対応する点（各指の一番下の点）を同じ量だけ移動させる
                root_e.x += dx;
                root_e.y += dy;

              //現在位置を次の基準にする
              dragStartX = value.x;
              dragStartY = value.y;

              myChart.update('none');

            } else if(datasetIndex == finger.thumb){
              const first_webspace_s =
                myChart.data.datasets[first_webspace].data[first_webspace_start];

            // 対応する点（各指の一番下の点）を同じ量だけ移動させる
              first_webspace_s.x += dx;
              first_webspace_s.y += dy;

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

//付け根を結合しなおすやつ。おまけなので消しても問題なしです
const  uni_click_event= document.getElementById('uni');
uni_click_event.addEventListener('click', () => {
  const root_e = myChart.data.datasets[roots].data[root_end]
  const root_s = myChart.data.datasets[roots].data[root_start]
  const webs_e = myChart.data.datasets[first_webspace].data[first_webspace_end]
  const webs_s = myChart.data.datasets[first_webspace].data[first_webspace_start]

  const dx_l_root = (myChart.data.datasets[finger.little].data[root].x) - (myChart.data.datasets[roots].data[root_end].x)
  const dy_l_root = (myChart.data.datasets[finger.little].data[root].y) - (myChart.data.datasets[roots].data[root_end].y)

  root_e.x += dx_l_root;
  root_e.y += dy_l_root;

  const dx_f_root = (myChart.data.datasets[finger.fore].data[root].x) - (myChart.data.datasets[roots].data[root_start].x)
  const dy_f_root = (myChart.data.datasets[finger.fore].data[root].y) - (myChart.data.datasets[roots].data[root_start].y)

  root_s.x += dx_f_root;
  root_s.y += dy_f_root;

  const dx_f_t_root = (myChart.data.datasets[finger.fore].data[root].x) - (myChart.data.datasets[first_webspace].data[first_webspace_end].x)
  const dy_f_t_root = (myChart.data.datasets[finger.fore].data[root].y) - (myChart.data.datasets[first_webspace].data[first_webspace_end].y)

  webs_e.x += dx_f_t_root;
  webs_e.y += dy_f_t_root;

  const dx_t_root = (myChart.data.datasets[finger.thumb].data[root].x) - (myChart.data.datasets[first_webspace].data[first_webspace_start].x)
  const dy_t_root = (myChart.data.datasets[finger.thumb].data[root].y) - (myChart.data.datasets[first_webspace].data[first_webspace_start].y)

  webs_s.x += dx_t_root;
  webs_s.y += dy_t_root;

  console.log(root_e)
  myChart.update('none');

})




//指の長さ計算・表として表示
const  button_click_event= document.getElementById('feed_b');
button_click_event.addEventListener('click', () => {

  
  //表のデータを取得
  const table_body =
    document.querySelector('.coord_table_body');

  // 一度、表の中身を全部削除
  table_body.innerHTML = '';

  //指の座標取得
  function getFingerCoord() {
 // datasetsから、それぞれの指のdata（x,y）を取得し返す
  return {
    fore: myChart.data.datasets[finger.fore].data,
    middle: myChart.data.datasets[finger.middle].data,
    third: myChart.data.datasets[finger.third].data,
    little: myChart.data.datasets[finger.little].data,
    thumb: myChart.data.datasets[finger.thumb].data,
  };
}

//取得した指の座標を別の変数に代入
  const coord = getFingerCoord();

  // 表示する指の名称と座標をまとめる
  let fingers = 0
  fingers = [
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
  
  //関節間の長さ
  //各指の関節間の長さ
  const finger_distance = (finger_name, first, second) => {
    const point_1 = fingers[finger_name].points[first];
    const point_2 = fingers[finger_name].points[second];
    return Math.hypot(point_1.x - point_2.x, point_1.y - point_2.y);
  };
  
  for (const name of ['fore', 'middle', 'third', 'little']) {
    length[name].third_second = finger_distance(finger[name], joint.second, joint.third);
    length[name].second_first = finger_distance(finger[name], joint.first, joint.second);
    length[name].first_tip    = finger_distance(finger[name], joint.tip, joint.first);
  }

  //親指の関節間の長さ
  for (const name of ['thumb']){
    length[name].second_first = finger_distance(finger[name], joint.thumb.second, joint.thumb.first);
    length[name].first_tip = finger_distance(finger[name], joint.thumb.first, joint.thumb.tip);
  }

  //付け根間の長さ
  const root_distance = (finger_name_1, finger_name_2) => {
    const point_1 = fingers[finger_name_1].points[root];
    const point_2 = fingers[finger_name_2].points[root];
    return Math.hypot(point_1.x - point_2.x, point_1.y - point_2.y);
  };

  length.root.fore_little = root_distance(finger.fore, finger.little);
  length.root.thumb_fore = root_distance(finger.thumb, finger.fore);

  //付け根～手首の長さ
  const root_datum_distance = (finger_name) => {
    const point_1 = fingers[finger_name].points[root];
    const point_2 = fingers[finger_name].points[datum];
    return Math.hypot(point_1.x - point_2.x, point_1.y - point_2.y);
  };
  length.root.datum_middle = root_datum_distance(finger.middle);
  length.root.datum_thumb = root_datum_distance(finger.thumb);



  
  //表として部位と長さを表示
  Object.entries(length).forEach(([part_name, key]) => {
  if (typeof key === "object") {
    Object.entries(key).forEach(([length_name, Value]) => {

      console.log(`${part_name}.${length_name}: ${Value}`,Math.round(Value));

      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${part_name}</td>
        <!-- <td>P${key}</td> -->
        <td>${length_name}</td>
        <td>${Math.round(Value)}</td>
      `;

      // console.log(finger)

      table_body.appendChild(row);

    });
  } else {
    console.log(`${part_name}: ${key}`);
  }
  });


});

