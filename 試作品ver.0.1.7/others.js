// タブの切り替え処理（適当なサイトからコピペしてきた）
$(function() {
    $('#tab_bs .btn:first-of-type a').addClass("is-active"); //最初のbtnのaにis-activeクラスを追加
    $('#tab_cont .tab_item:first-of-type').addClass("is-active"); //最初の.tab-contents-itemにis-activeクラスを追加
    $('#tab_bs a').click(function(){// #tab-btn内のaをクリックした時、
        $('#tab_bs a').removeClass("is-active");//もともとついているis-activeクラスを取り除き
        $(this).addClass("is-active");//表示させたいエリアのタブリンク名をクリックしたら、押したボタンにis-activeクラスを追加 
        $('#tab_cont .tab_item').removeClass("is-active");//もともとついているis-activeクラスを取り除き、
        $($(this).attr('data-tab')).addClass("is-active")// クリックされたaのdate属性にあたるdivを表示し、
        return false;// これらの動作を繰り返さずに、終了させる。
    });
});





// モーダルウィンドウ表示・非表示の処理
const selectModal = document.getElementById("select_model_c");
const selectBtn = document.getElementById("select_b");
const closeBtn = document.getElementById("closebutton");

// モデル選択画面を開く
if (selectBtn && selectModal) {
  selectBtn.addEventListener("click", () => {
    selectModal.showModal(); // ★ showModal() を使用
  });
}

// 閉じるボタンで閉じる
if (closeBtn && selectModal) {
  closeBtn.addEventListener("click", () => {
    selectModal.close(); // ★ close() を使用
  });
}

// （オプション）背景（ダイアログの外側の余白部分）をクリックしたときに閉じる
if (selectModal) {
  selectModal.addEventListener("click", (event) => {
    const rect = selectModal.getBoundingClientRect();
    const isInDialog = 
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    
    if (!isInDialog) {
      selectModal.close();
    }
  });
}