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
	const $pageTop = $("#js-page-top");
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

	/* ------------------------------
ダイビング情報・お客様の声・料金一覧の画像アニメーション
------------------------------ */
	//要素の取得とスピードの設定
	let box = $(".u-color-box"),
		speed = 700;

//.u-color-boxの付いた全ての要素に対して下記の処理を行う
box.each(function (i) {
	$(this).append('<div class="u-color-box__color"></div>');
	let color = $(this).find($(".u-color-box__color")),
		image = $(this).find("img");
	let counter = 0;

	image.css("opacity", "0");
	color.css("width", "0%");

	color.on("inview", function () {
		if (counter == 0) {
			$(this)
				.delay(i * 300) // <- Here, we multiply the index by 300ms to create the staggered delay
				.animate({ width: "100%" }, speed, function () {
					image.css("opacity", "1");
					$(this).css({ left: "0", right: "auto" });
					$(this).animate({ width: "0%" }, speed);
				});
			counter = 1;
		}
	});
});

	/* ------------------------------
  トップ MVスライダー
  ------------------------------ */
	const mvSwiper = new Swiper(".js-top-mv-swiper", {
		loop: true,
		// autoplay: {
		// 	delay: 4000,
		// },
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		speed: 2000,
	});

	/* ------------------------------
  トップ キャンペーン スライダー
  ------------------------------ */
	const campaignSwiper = new Swiper(".js-top-campaign-swiper", {
		// slidesPerView: 1.26,
		slidesPerView: "auto",
		// spaceBetween: 24,
		breakpoints: {
			768: {
				// spaceBetween: 40,
				// slidesPerView: 3.48,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
		},
	});
	
});
