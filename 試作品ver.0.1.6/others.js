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

