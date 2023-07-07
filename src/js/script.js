jQuery(function ($) {
	$("#js-drawer").fadeIn(); // test

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
});
