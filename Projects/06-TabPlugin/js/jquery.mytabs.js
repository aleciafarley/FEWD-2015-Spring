(function($) {

	function init($target) {
		//guard against re-initialization
		if (!$target.hasClass("mytabs")) {

			// using the on handler there are three elemens
			// click on the child elements .tab-nav and .tab and do the fn onClick
			$target.addClass("mytabs").on("click" , ".tab-nav .tab", onClick);
		}

		//Event handler
		function onClick(event) {
			event.preventDefault();

			var $parent = $(event.delegateTarget),    //Tabbed interface
				$target = $(this),                    // handle taht was clicked
				$tabHandles = $parent.find(".tab-nav .tab"),
				$tabContent = $parent.find(".tab-content .tab"),
				index = $tabHandles.index($target);

			$tabHandles.removeClass("active").eq(index).addClass("active");
			$tabContent.removeClass("active").eq(index).addClass("active");
		}

	}

	//register plugin with jQuery
	$.fn.myTabs = function () {

		//cache the targets
		var $targets = $(this);

		//loop through all targets
		for (var i = 0; i < $targets.length; i++) {
			init ($targets.eq(i) );
		}

		//maintain chain-ability
		return $targets;



	}


}) (jQuery);