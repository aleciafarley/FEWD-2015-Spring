(function($) {

	// this is simgular "target" b/c we are taking one target at a time; 
	// below it is plural because we are doing the function to all of the targets

	//Main initialization
	function init($target) {

		//first thing to do is look for a piece of data - a class in this case
		//Guard against re-initialization by saying find all that have not been intiialized
		if (! $target.hasClass("highlighted") ) {

			//Add the class and attach an event listener/call back
			//this means that every time our target is clicked it will run onClick
			$target.addClass("highlighted").click(onClick);
		}
	}

	//event handler
	function onClick(event) {
		//Cache the target element
		var $target = $(this);

		//check for active class
		if ($target.hasClass("active")) {
			//If it exists, remove it
			$target.removeClass("active");

		} else {
			//if not, add it
			$target.addClass("active");
	
		}

	}

	//register plugin with jQuery)

	$.fn.highlight = function() {
		//Cache targets   -  this is a micro=optimization which will i
		  // improve performance; it's defensive (to help)
		var $targets = $(this);

		//for loop will execute what is in the brackets as many times as we tell it

		for (var i = 0; i < $targets.length; i++) {
			init ($targets.eq(i) );
		};

		//Maintain chain-ability
		return $targets;



	};

})(jQuery);