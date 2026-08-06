
function preview_s(obj) {
    // 選択した全てのファイルに対してループ処理をします。
    for (i = 0; i < obj.files.length; i++) {
        // FileReaderオブジェクトを作成します。これによりブラウザ上でファイルを読み込むことが可能になります。
        let fileReader = new FileReader();
        // onloadイベントハンドラを設定します。ファイルが正常に読み込まれたときに呼び出されます。
        fileReader.onload = ((e)=> {
            // 読み込んだ画像ファイルをData URLとしてimg要素に設定します。
            // これにより、選択した画像がブラウザ上でプレビュー表示されます。
            document.querySelector('#img_s').innerHTML += '<img src="' + e.target.result + '">';
        });
        // ファイルをData URLとして読み込みます。
        fileReader.readAsDataURL(obj.files[i]);
    }
}

// 選択した画像ファイルのプレビューを生成する関数を定義します。
        function preview_f(obj) {
            // 選択した全てのファイルに対してループ処理をします。
            for (i = 0; i < obj.files.length; i++) {
                // FileReaderオブジェクトを作成します。これによりブラウザ上でファイルを読み込むことが可能になります。
                let fileReader = new FileReader();
                // onloadイベントハンドラを設定します。ファイルが正常に読み込まれたときに呼び出されます。
                fileReader.onload = ((e)=> {
                    // 読み込んだ画像ファイルをData URLとしてimg要素に設定します。
                    // これにより、選択した画像がブラウザ上でプレビュー表示されます。
                    document.querySelector('#img_f').innerHTML += '<img src="' + e.target.result + '" width="30">';
                });
                // ファイルをData URLとして読み込みます。
                fileReader.readAsDataURL(obj.files[i]);
            }
        }



//resizeTo(800,600);