// #createをクリックしたら
const create = document.getElementById("create");
create.addEventListener("click", function () {
    // #strのvalueを取得
    const str = document.getElementById("str").value;
    // #strの長さを取得　39個
    const len = str.length;
    //何回繰り返すか
    const turn = 10;
    // 箱を作る
    let box = "";
    // 0~38の値をランダムに10個取り出す
    for (let i = 0; i < turn; i++) {
        const r = Math.floor(Math.random() * len);

        // ランダムで作成した整数が0だったら大文字に変換
        if (Math.floor(Math.random() * 2) == 0) {
            // 箱に値を代入 文字列.何番目の値？
            box += str.charAt(r);
        } else {
            box += str.charAt(r).toUpperCase();
        }

    }

    // #passの中にboxの値を代入
    const pass = document.getElementById("pass");
    pass.value = box;

});


