$.fn.effectiveScroll = function( options ) {

  	var $scrollContent = $( this );
		var opt = $.extend(
			options,
			{
				animateSpeed: 300,
				callBack: function() {}
			}
		);

		$('a[href^="#"]').bind("click", function() {
			var $this = $( this );
			var $target = $( $this.attr("href") );

			if ( $this.attr("href") == "#" || $target == [] ) {
				return false;
			}

			var top = $target.offset().top - $scrollContent.offset().top;

			$scrollContent.animate( { scrollTop: "+=" + top }, opt.animateSpeed, function() {
				window.location.hash = $target.attr("id");
			} );

			return false;
		});
	};
