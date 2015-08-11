webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(5);
	var _ = __webpack_require__(6);
	__webpack_require__(8);

	var angular = __webpack_require__(2);

	angular.module('f5', [
	    __webpack_require__(21),
	    __webpack_require__(1),
	    __webpack_require__(29),
	    __webpack_require__(28),
	    __webpack_require__(27)
	])

	.config(function($logProvider){
	    $logProvider.debugEnabled(true);
	})

	.controller('MainCtrl', function($scope, $timeout, $log, $state, ListItems){
	    this.title = 'F5 Angular';
	    this.items = ListItems.items;

	    this.menu = _($state.get()).pluck('name').compact().value();
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

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

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
	        restrict: 'EA',
	        scope: {
	            items: '='
	        },
	        controller: 'ListCtrl as list',
	        bindToController: true,
	        template: __webpack_require__(4)
	    }
	})

	.name;

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = "<form name=\"frm_add_item\" class=\"form-inline\" ng-submit=\"frm_add_item.$valid && list.addItem(list.item)\" novalidate>\r\n    <div class=\"form-group\" ng-class=\"{'has-error': (frm_add_item.$submitted && frm_add_item.item.$invalid) || (frm_add_item.$dirty && frm_add_item.item.$invalid)}\">\r\n        <input class=\"form-control\" name=\"item\" ng-model=\"list.item\" type=\"text\" required />\r\n        <button class=\"btn btn-default\" type=\"submit\" ng-disabled=\"frm_add_item.$invalid\">Add Item</button>\r\n    </div>\r\n</form>\r\n\r\n<br/>\r\n\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item\" ng-repeat=\"item in list.items track by $index\">\r\n        {{item}}\r\n\r\n        <a href=\"\" class=\"btn btn-default pull-right\" ng-click=\"list.removeItem(item)\">Delete</a>\r\n        <div class=\"clearfix\"></div>\r\n    </li>\r\n</ul>"

/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = "<h1>Dashboard</h1>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\"><a ui-sref=\"items\">Items <span class=\"badge default pull-right\">{{main.items.length}}</span></a></li>\r\n            <li class=\"list-group-item\"><a ui-sref=\"form\">Form</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "<h1>{{form.title}}</h1>\r\n\r\n<ul>\r\n    <li ng-repeat=\"item in form.items\">{{item}}</li>\r\n</ul>\r\n"

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('form', [
	    __webpack_require__(21)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('form', {
	            url: '/form',
	            controller: 'FormCtrl as form',
	            template: __webpack_require__(23)
	        })
	})

	.controller('FormCtrl', function(){
	    this.title = 'Form';

	    this.items = ['item 1', 'item 2'];
	})

	.name

	;

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('items', [
	    __webpack_require__(21)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('items', {
	            url: '/items',
	            template: '<h1>Items</h1><item-list items="main.items"></item-list><p><a ui-sref="form">Go to form</a></p>'
	        })
	})

	.name

	;

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('dashboard', [
	    __webpack_require__(21)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('dashboard', {
	            url: '/',
	            template: __webpack_require__(22)
	        })
	})

	.name

	;

/***/ }

});