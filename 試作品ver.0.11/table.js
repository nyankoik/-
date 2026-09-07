//length：グラフから得た座標を基に計算した指の長さ（平面）　graph.js参照
console.log(length)

//基準とする指の長さ
const collect_len = {
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



//ボタンクリックを受け取ったとき　graph.jsの下部参照
feed_click.addEventListener('click', () => {

//==========================
//表（左）の日本語
const t_name_l = {
  finger: {
    fore: '人差し指',
    middle: '中指',
  },

  joint: {
    third_second: '第三～第二関節',
    second_first: '第二～第一関節',
    first_tip: '第一関節～先端',
  }
};

//表のデータを取得
  const table_l =
    document.querySelector('.coord_table_l');

  // 一度、表の中身を全部削除
  table_l.innerHTML = '';

  //データとともにhtmlに挿入
  table_l.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${t_name_l.finger.fore}</td>
      <td class="empty"></td>
      <td class="empty"></td>
    </tr>
    <tr>
      <td>${t_name_l.joint.third_second}</td>
      <td>${Math.round((length.fore.third_second) * 10)/10}</td>
      <td>${collect_len.joint.fore.t_s}</td>
    </tr>
    <tr>
      <td>${t_name_l.joint.second_first}</td>
      <td>${Math.round((length.fore.second_first) * 10)/10}</td>
      <td>${collect_len.joint.fore.s_f}</td>
    </tr>
    <tr>
      <td>${t_name_l.joint.first_tip}</td>
      <td>${Math.round((length.fore.first_tip) * 10)/10}</td>
      <td>${collect_len.joint.fore.f_t}</td>
    </tr>

    <tr>
      <td>${t_name_l.finger.middle}</td>
      <td class="empty"></td>
      <td class="empty"></td>
    </tr>
    <tr>
      <td>${t_name_l.joint.third_second}</td>
      <td>${Math.round((length.middle.third_second) * 10)/10}</td>
      <td>${collect_len.joint.middle.t_s}</td>
    </tr>
    <tr>
      <td>${t_name_l.joint.second_first}</td>
      <td>${Math.round((length.middle.second_first) * 10)/10}</td>
      <td>${collect_len.joint.middle.s_f}</td>
    </tr>
    <tr>
      <td>${t_name_l.joint.first_tip}</td>
      <td>${Math.round((length.middle.first_tip) * 10)/10}</td>
      <td>${collect_len.joint.middle.f_t}</td>
    </tr>
  `);

  //=========================
  //表（真ん中）
  const t_name_c = {
  finger: {
    third: '薬指',
    little: '小指',
  },

  joint: {
    third_second: '第三～第二関節',
    second_first: '第二～第一関節',
    first_tip: '第一関節～先端',
  }
};

//表のデータを取得
  const table_c =
    document.querySelector('.coord_table_c');

  // 一度、表の中身を全部削除
  table_c.innerHTML = '';

  //データとともにhtmlに挿入
  table_c.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${t_name_c.finger.third}</td>
      <td class="empty"></td>
      <td class="empty"></td>
    </tr>
    <tr>
      <td>${t_name_c.joint.third_second}</td>
      <td>${Math.round((length.third.third_second) * 10)/10}</td>
      <td>${collect_len.joint.third.t_s}</td>
    </tr>
    <tr>
      <td>${t_name_c.joint.second_first}</td>
      <td>${Math.round((length.third.second_first) * 10)/10}</td>
      <td>${collect_len.joint.third.s_f}</td>
    </tr>
    <tr>
      <td>${t_name_c.joint.first_tip}</td>
      <td>${Math.round((length.third.first_tip) * 10)/10}</td>
      <td>${collect_len.joint.third.f_t}</td>
    </tr>

    <tr>
      <td>${t_name_c.finger.little}</td>
      <td class="empty"></td>
      <td class="empty"></td>
    </tr>
    <tr>
      <td>${t_name_c.joint.third_second}</td>
      <td>${Math.round((length.little.third_second) * 10)/10}</td>
      <td>${collect_len.joint.little.t_s}</td>
    </tr>
    <tr>
      <td>${t_name_c.joint.second_first}</td>
      <td>${Math.round((length.little.second_first) * 10)/10}</td>
      <td>${collect_len.joint.little.s_f}</td>
    </tr>
    <tr>
      <td>${t_name_c.joint.first_tip}</td>
      <td>${Math.round((length.little.first_tip) * 10)/10}</td>
      <td>${collect_len.joint.little.f_t}</td>
    </tr>
  `);

  //=============
//表（右）
const t_name_r = {
  part: {
    thumb: '親指',
  },

  joint: {
    second_first: '第二～第一関節',
    first_tip: '第一関節～先端',
  },

  root:{
    fore_little: '人差し指付け根～小指',
    thumb_fore: '第一指間腔',
    datum_middle: '手首～中指付け根',
    datum_thumb: '手首～親指付け根',
  }
};

//表のデータを取得
  const table_r =
    document.querySelector('.coord_table_r');

  // 一度、表の中身を全部削除
  table_r.innerHTML = '';

  //データとともにhtmlに挿入
  table_r.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${t_name_r.part.thumb}</td>
      <td class="empty"></td>
      <td class="empty"></td>
    </tr>
    <tr>
      <td>${t_name_r.joint.second_first}</td>
      <td>${Math.round((length.thumb.second_first) * 10)/10}</td>
      <td>${collect_len.joint.thumb.s_f}</td>
    </tr>
    <tr>
      <td>${t_name_r.joint.first_tip}</td>
      <td>${Math.round((length.thumb.first_tip) * 10)/10}</td>
      <td>${collect_len.joint.thumb.f_t}</td>
    </tr>

    <tr>
      <td>その他</td>
      <td class="empty"></td>
      <td class="empty"></td>
    </tr>
    <tr>
      <td>${t_name_r.root.fore_little}</td>
      <td>${Math.round((length.root.fore_little) * 10)/10}</td>
      <td>${collect_len.root.f_l}</td>
    </tr>
    <tr>
      <td>${t_name_r.root.thumb_fore}</td>
      <td>${Math.round((length.root.thumb_fore) * 10)/10}</td>
      <td>${collect_len.root.t_f}</td>
    </tr>
    <tr>
      <td>${t_name_r.root.datum_middle}</td>
      <td>${Math.round((length.root.datum_middle) * 10)/10}</td>
      <td>${collect_len.root.d_m}</td>
    </tr>
    <tr>
      <td>${t_name_r.root.datum_thumb}</td>
      <td>${Math.round((length.root.datum_thumb) * 10)/10}</td>
      <td>${collect_len.root.d_t}</td>
    </tr>
  `);

  


// Object.entries(length).forEach(([fin, part]) => {
//   const fingerName = tableNames.finger[finger[fin]];


//   // 指名の行
//   table_l.insertAdjacentHTML('beforeend', `
//     <tr>
//       <td>${fingerName}</td>
//       <td class="empty"></td>
//       <td class="empty"></td>
//     </tr>
//   `);

//   // 関節の行
//   if (typeof part === 'object') {
//     Object.entries(part).forEach(([key, value]) => {
//       table_l.insertAdjacentHTML('beforeend', `
//         <tr>
//           <td>${tableNames.joint[key]}</td>
//           <td>${Math.round(value)}</td>
//           <td class="empty"></td>
//         </tr>
//       `);
//     });
//   }
// });

})