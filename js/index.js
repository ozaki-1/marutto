"use strict";


// ハンバーガーメニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


// スライダー
$(function () {
    $("#slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        // adaptiveHeight: true
    });
});


// ゆっくりスクロール
$('.page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;  //idの上部の距離を取得
    $('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
});



// ポップアップ
$(".works1").on("click", function () {
    $(".popup1")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup1").fadeOut();
    // return false;
});

$(".works2").on("click", function () {
    $(".popup2")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup2").fadeOut();
    // return false;
});

$(".works3").on("click", function () {
    $(".popup3")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup3").fadeOut();
    // return false;
});

$(".works4").on("click", function () {
    $(".popup4")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup4").fadeOut();
    // return false;
});

$(".works5").on("click", function () {
    $(".popup5")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup5").fadeOut();
    // return false;
});

$(".works6").on("click", function () {
    $(".popup6")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup6").fadeOut();
    // return false;
});

$(".works7").on("click", function () {
    $(".popup7")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup7").fadeOut();
    // return false;
});

$(".works8").on("click", function () {
    $(".popup8")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup8").fadeOut();
    // return false;
});

$(".works9").on("click", function () {
    $(".popup9")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup9").fadeOut();
    // return false;
});

$(".works10").on("click", function () {
    $(".popup10")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup10").fadeOut();

    // return false;
});

$(".works11").on("click", function () {
    $(".popup11")
        .addClass("show")
        .fadeIn();
    // return false;
});
$(".close").on("click", function () {
    $(".popup11").fadeOut();
    // return false;
});
// ----------ポップアップ


// フェードイン
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    // ふわっ
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
// ----------フェードイン


// クリックすると跳ねるやつ
// またすぐクリックできるようにする関数
function time() {
    setTimeout(function () {
        $('.poyon').removeClass('poyon');
    }, 800);
}

// クリックすると跳ねるよ。
$(".about-svg , .logo").click(function () {
    $(this).toggleClass('poyon');/* toggleでクラスを付けたり消したり */
    time();
})
// ----------クリックすると跳ねるやつ

// アコーディオン
$(function () {
	// まずメニュー部分を非表示にする
	$(".profile-career p").hide();

	// 項目をクリックしたらリストをスライド表示させる
	$(".profile-career h3").on("click",function(){
		$(this).nextAll().slideToggle();
	});
});
// ----------アコーディオン