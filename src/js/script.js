jQuery(function ($) {
	// $("#js-drawer").fadeIn(); // test

	/* ------------------------------
ドロワーメニュー開閉（フェード）
------------------------------ */
	$("#js-menu").click(function () {
		$("body").toggleClass("is-drawerActive");
		if ($(this).attr("aria-expanded") == "false") {
			$(this).attr("aria-expanded", true);
			$("#js-drawer").attr("aria-hidden", "false");
			$("#js-drawer").fadeIn();
			$("html,body").css("overflow", "hidden");
		} else {
			$(this).attr("aria-expanded", false);
			$("#js-drawer").attr("aria-hidden", "true");
			$("#js-drawer").fadeOut();
			$("html,body").css("overflow", "initial");
		}
	});

/* ------------------------------
ページトップへ戻るボタン
------------------------------ */
const $pageTop = $('#js-page-top')
$pageTop.hide();

// 200pxスクロールしたらボタン表示
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$pageTop.fadeIn();
	} else {
		$pageTop.fadeOut();
	}

	// フッターまでスクロールしたらボタンをフッターの直前に止める
	let footer = $("footer").offset().top; // フッターの位置を取得
	let scrollTop = $(window).scrollTop(); // 現在のスクロール位置を取得
	let windowHeight = $(window).height(); // 現在のウィンドウの高さを取得

	if (scrollTop + windowHeight > footer) {
		let position = scrollTop + windowHeight - footer + 20;
		$pageTop.css("bottom", position);
	} 
});

});
