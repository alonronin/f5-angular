webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);
	var _ = __webpack_require__(2);

	var angular = __webpack_require__(4);

	angular.module('f5', [
	    __webpack_require__(6)
	])

	.config(function($logProvider){
	    $logProvider.debugEnabled(true);
	})

	.controller('MainCtrl', function($scope, $timeout, $log, ListItems){
	    this.title = 'F5 Angular';
	    this.items = ListItems.items;

	    $timeout(function(){
	        this.title = 'F5 Title Changed'
	    }.bind(this), 5000)
	})

	.service('ListItems', function(){
	    this.items = [
	        'item 1',
	        'item 2',
	        'item 3'
	    ]
	})

	;



/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(4);

	module.exports = angular.module('f5.directives', [])

	.controller('ListCtrl', function(){
	    this.addItem = function(item){
	        this.items.push(item);
	        this.item = '';
	    };

	    this.removeItem = function(item){
	        _.remove(this.items, function(i){
	            return i === item;
	        });
	    };
	})

	.directive('itemList', function(){
	    return {
	        restrict: 'E',
	        scope: {
	            items: '='
	        },
	        controller: 'ListCtrl as list',
	        bindToController: true,
	        template: __webpack_require__(7)
	    }
	})

	.name;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<form name=\"frm_add_item\" class=\"form-inline\" ng-submit=\"frm_add_item.$valid && list.addItem(list.item)\" novalidate>\r\n    <div class=\"form-group\" ng-class=\"{'has-error': (frm_add_item.$submitted && frm_add_item.item.$invalid) || (frm_add_item.$dirty && frm_add_item.item.$invalid)}\">\r\n        <input class=\"form-control\" name=\"item\" ng-model=\"list.item\" type=\"text\" required />\r\n        <button class=\"btn btn-default\" type=\"submit\" ng-disabled=\"frm_add_item.$invalid\">Add Item</button>\r\n    </div>\r\n</form>\r\n\r\n<br/>\r\n\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item\" ng-repeat=\"item in list.items track by $index\">\r\n        {{item}}\r\n\r\n        <a href=\"\" class=\"btn btn-default pull-right\" ng-click=\"list.removeItem(item)\">Delete</a>\r\n        <div class=\"clearfix\"></div>\r\n    </li>\r\n</ul>"

/***/ }
]);