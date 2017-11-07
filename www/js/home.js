/**
* Slide show
* ref: https://tympanus.net/codrops/2011/09/05/slicebox-3d-image-slider/
*/
$(function() {
	var Page = (function() {
		var $navArrows = $( '#nav-arrows' ).hide(),
			$navOptions = $( '#nav-options' ).hide(),
			$shadow = $( '#shadow' ).hide(),
			slicebox = $( '#sb-slider' ).slicebox( {
				onReady : function() {
					$navArrows.show();
					$navOptions.show();
					$shadow.show();
				},
				orientation : 'h',
				cuboidsCount : 3
			} ),
			init = function() {

				initEvents();	
			},
			initEvents = function() {
				// add navigation events
				$navArrows.children( ':first' ).on( 'click', function() {

					slicebox.next();
					return false;
				} );
				$navArrows.children( ':last' ).on( 'click', function() {
					
					slicebox.previous();
					return false;
				} );
				$( '#navPlay' ).on( 'click', function() {
					
					slicebox.play();
					return false;
				} );
				$( '#navPause' ).on( 'click', function() {
					
					slicebox.pause();
					return false;
				} );
			};
			return { init : init };
	})();

	Page.init();
/*
    $("#slider").slick({
        accessiblility: true,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        fade: true,
    });
*/

});

	
