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
        var main = $("main").css("background-position-y", parseInt(-y / 7) + "px");
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
/*
$.Slicebox.defaults = {
	// (v)ertical, (h)orizontal or (r)andom
	orientation : 'v',

	// perspective value
	perspective : 1200,

	// number of slices / cuboids
	// needs to be an odd number 15 => number > 0 (if you want the limit higher, 
	// change the _validate function).
	cuboidsCount : 5,

	// if true then the number of slices / cuboids is going to be random (cuboidsCount is overwitten)
	cuboidsRandom : false,

	// the range of possible number of cuboids if cuboidsRandom is true
	// it is strongly recommended that you do not set a very large number :)
	maxCuboidsCount : 5,

	// each cuboid will move x pixels left / top (depending on orientation). 
	// The middle cuboid doesn't move. the middle cuboid's neighbors will 
	// move disperseFactor pixels
	disperseFactor : 0,

	// color of the hidden sides
	colorHiddenSides : '#222',

	// the animation will start from left to right. The left most 
	// cuboid will be the first one to rotate
	// this is the interval between each rotation in ms
	sequentialFactor : 150,

	// animation speed
	// this is the speed that takes "1" cuboid to rotate
	speed : 600,

	// transition easing
	easing : 'ease',

	// if true the slicebox will start the animation automatically
	autoplay : false,

	// time (ms) between each rotation, if autoplay is true
	interval: 3000,

	// the fallback will just fade out / fade in the items
	// this is the time fr the fade effect
	fallbackFadeSpeed : 300,
	
	// callbacks
	onBeforeChange : function( position ) { return false; },
	onAfterChange : function( position ) { return false; }
};

	$('#sb-slider').slicebox();
*/
/**
* Gallery 
* Full-Screen Mode
*/
    var viewer = ImageViewer();
    $('.gallery-items').click(function () {
        var imgSrc = this.src,
            highResolutionImage = $(this).data('high-res-img');
 
        viewer.show(imgSrc, highResolutionImage);
    });
	
var page = 0;
var lastPage = parseInt($("#slider img").length - 1);       
console.log(lastPage);  
console.log("width: " + $(window).width());       
});
