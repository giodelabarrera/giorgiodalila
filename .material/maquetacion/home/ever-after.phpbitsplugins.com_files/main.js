(function($){
	
	"use strict";
	
    $(document).ready(function(){

		/* Hero height
		================================================== */
		var windowHeight = $(window).height();
		
		$('.hero').height( windowHeight );
		
		$(window).resize(function() {
			
			var windowHeight = $(window).height();
			$('.hero').height( windowHeight );
			
		});

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			// $('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});

		if($('#photostack').length > 0){
			/* Gallery
			================================================== */
			new Photostack( document.getElementById( 'photostack' ), {
				callback : function( item ) {
					//console.log(item)
				}
			} );	
				
			/* Gallery popup
			=================================================== */	
			$('.photostack').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title');
					}
				},
				/* zoom: {
					enabled: true,
					duration: 300 // don't foget to change the duration also in CSS
				} */
			});
		}	
		if($('.blog-post-slider').length > 0){
			$('.blog-post-slider').flexslider({
	            animation: "fade",
	            controlNav: false,
	            slideshowSpeed: 4000

	        });
		}
		
		$('#commentform .form-submit #submit').addClass('btn btn-primary');	
	});		


})(jQuery);