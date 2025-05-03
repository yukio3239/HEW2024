// top

document.addEventListener("DOMContentLoaded", function() {
    var before_mv = document.getElementById("before_mv");
    var after_mv = document.getElementById("after_mv");
    var video = document.getElementById("video");

    // 動画が再生中はafter_mvを非表示にする
    video.addEventListener("play", function() {
        console.log("動画が再生中です。");
        after_mv.style.opacity = 0;
    });
    
    // 動画が終了したらvideoを非表示にし、after_mvをフェードインさせる
    video.addEventListener("ended", function() {
        console.log("動画が終了しました。");
        before_mv.style.display = "none";
        after_mv.style.display = "block";
        // after_mv.classList.add("visible");
        after_mv.style.opacity = 1;
        // console.log(after_mv.classList); // デバッグ用
    });
});



$('#slider_01').slick({
    autoplay: true,         //自動再生
    autoplaySpeed: 0,       //自動再生のスピード
    speed: 3000,            //追加（スライドスピード
    slidesToShow: 7, 
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,    //追加（ホバーしても止まらないように
    pauseOnFocus: false,    //追加（フォーカスしても止まらないように 
})
$('#slider_02').slick({
    autoplay: true,         //自動再生
    autoplaySpeed: 0,       //自動再生のスピード
    speed: 4000,            //追加（スライドスピード
    slidesToShow: 7, 
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,    //追加（ホバーしても止まらないように
    pauseOnFocus: false,    //追加（フォーカスしても止まらないように 
    rtl: true
})
$('#slider_03').slick({
    autoplay: true,         //自動再生
    autoplaySpeed: 0,       //自動再生のスピード
    speed: 2000,            //追加（スライドスピード
    slidesToShow: 7, 
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,    //追加（ホバーしても止まらないように
    pauseOnFocus: false,    //追加（フォーカスしても止まらないように 
})

// 768px以下では1カラムにするため、position: sticky;に対応していないブラウザ対応用のJavaScriptを、768pxより大きい場合に読み込み、他は取り除く。

// $(window).on('load resize', function() {
// var windowWidth = window.innerWidth;
// var elements = $('#fixed-area');
// if (windowWidth >= 768) {
// Stickyfill.add(elements);
// }else{
// Stickyfill.remove(elements);
// } 
// });


//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.choice-btn', //連動させるサムネイルのクラス名
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 4, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});

//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 768) {//横幅が768px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
		$(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
			var parentElem =  $(this).parent();// aタグから見た親要素のliを取得し
			$(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
			$(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
			return false;//リンクの無効化
		});
	}else{//横幅が768px以上の場合
		$(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
		$(".has-child").removeClass('active');//activeクラスを削除
		$('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
	}
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});