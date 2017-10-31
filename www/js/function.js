/**
* 画面をスクロールしたときに、
* fixedしているヘッダーやナビゲーションに対して、少し透過させる
*/
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 0) {
            //$('header').css('opacity', 0.8);
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
        var main = $("main").css("background-position-y", parseInt(-y / 7) + "px");
    })

    

/**
* Hamburger Menu  
*/
	$('.drawer').drawer();
	$('.drawer-hamburger').on('click',function(){
		$("#headerNav").css({"display": "none"});
	});
	 $('.drawer').on('drawer.closed', function(){
		$("#headerNav").css({"display": "inline"});
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
/**
* Slide show
*
*/
    $("#slider").slick({
        accessiblility: true,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        fade: true,
    });

var page = 0;
var lastPage = parseInt($("#slider img").length - 1);       
console.log(lastPage);      
});
