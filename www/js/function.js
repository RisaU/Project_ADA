/**
* 画面をスクロールしたときに、
* fixedしているヘッダーやナビゲーションに対して、少し透過させる
*/
$(function() {
	var limitSize = '900';

    $(window).scroll(function() {
        if($(this).scrollTop() > 0) {

			$('header').css({
				"background-color": "#fbfbfb"
				, "opacity": "0.8"
			});
        } else {
			$('header').css({
				"background-color": "#fff"
				, "opacity": "0.8"
			});
        }
		/**
		* 画面をスクロールしたときに、
		* 背景画像をパララックス効果
		* parallax
		*/
        var y = $(this).scrollTop();
        var main = $("body").css("background-position-y", parseInt(-y / 15) + "px");
    })

/**
* Hamburger Menu  
*/
	$('.drawer').drawer();
	$('.drawer-hamburger').on('click',function(){
		$("#headerNav").hide();
	});
	 $('.drawer').on('drawer.closed', function(){
		if($(window).width() < limitSize) {
			//$("#headerNav").fadeIn(2000);
		} else {
			$("#headerNav").fadeIn(2000);
		}
	});

	$(window).resize(function() {
		if($(window).width() > limitSize) {
			$("#headerNav").fadeIn(2000);

		} else {
			$("#headerNav").fadeOut(1000);	
		}
	});
/**
* Button of "back to Top"
*/
    $("#topBtn").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#topBtn").fadeIn(3000); // shown up
        } else { 
            $("#topBtn").fadeOut("fast"); //hide
        }
    });
    $('#topBtn').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
/**
* 現在の画面
*/
$("header nav a").each(function() {
    var $href = $(this).attr("href");
//  console.log($href);
    if(location.href.match($href)) {
        $(this).attr("id", "active");
    } else {
        $(this).removeAttr("id");
    }
    
})	
var page = 0;
var lastPage = parseInt($("#slider img").length - 1);       
// console.log(lastPage);  
// console.log("width: " + $(window).width());       
});
