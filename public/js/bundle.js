webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);
	var _ = __webpack_require__(2);

	__webpack_require__(4);
	__webpack_require__(5);



/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function($) {
	    'use strict';

	    $(function () {

	        $('#side-menu').metisMenu();

	    });

	//Loads the correct sidebar on window load,
	//collapses the sidebar on window resize.
	// Sets the min-height of #page-wrapper to window size
	    $(function () {
	        $(window).bind("load resize", function () {
	            var topOffset = 50;
	            var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
	            if (width < 768) {
	                $('div.navbar-collapse').addClass('collapse');
	                topOffset = 100; // 2-row-menu
	            } else {
	                $('div.navbar-collapse').removeClass('collapse');
	            }

	            var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
	            height = height - topOffset;
	            if (height < 1) height = 1;
	            if (height > topOffset) {
	                $("#page-wrapper").css("min-height", (height) + "px");
	            }
	        });

	        var url = window.location;
	        var element = $('ul.nav a').filter(function () {
	            return this.href == url || url.href.indexOf(this.href) == 0;
	        }).addClass('active').parent().parent().addClass('in').parent();
	        if (element.is('li')) {
	            element.addClass('active');
	        }
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});