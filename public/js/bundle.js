webpackJsonp([0],[
/* 0 */
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
	    this.name = 'F5 Angular';
	    this.items = ListItems.items;

	    this.menu = _($state.get())
	        .filter(function(item){ return !item.parent && item.name !== ''} )
	        .map(function(item){
	            return { name: item.name, data: item.data };
	        })
	        .value();

	    $scope.$on('$stateChangeSuccess', function(e){
	        this.title = $state.current.data.title;
	    }.bind(this))
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
/* 1 */
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
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = "<form name=\"frm_add_item\" class=\"form-inline\" ng-submit=\"frm_add_item.$valid && list.addItem(list.item)\" novalidate>\r\n    <div class=\"form-group\" ng-class=\"{'has-error': (frm_add_item.$submitted && frm_add_item.item.$invalid) || (frm_add_item.$dirty && frm_add_item.item.$invalid)}\">\r\n        <input class=\"form-control\" name=\"item\" ng-model=\"list.item\" type=\"text\" required />\r\n        <button class=\"btn btn-default\" type=\"submit\" ng-disabled=\"frm_add_item.$invalid\">Add Item</button>\r\n    </div>\r\n</form>\r\n\r\n<br/>\r\n\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item\" ng-repeat=\"item in list.items track by $index\">\r\n        {{item}}\r\n\r\n        <a href=\"\" class=\"btn btn-default pull-right\" ng-click=\"list.removeItem(item)\">Delete</a>\r\n        <div class=\"clearfix\"></div>\r\n    </li>\r\n</ul>"

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\"><a ui-sref=\"items\">Items <span class=\"badge default pull-right\">{{main.items.length}}</span></a></li>\r\n            <li class=\"list-group-item\"><a ui-sref=\"form\">Form</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\" ui-sref-active=\"active\"><a ui-sref=\"grid1\">Grid 1</a></li>\r\n            <li class=\"list-group-item\" ui-sref-active=\"active\"><a ui-sref=\"grid2\">Grid 2</a></li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n        <ui-view></ui-view>\r\n    </div>\r\n</div>"

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('form', [
	    __webpack_require__(21),
	    __webpack_require__(30),
	    __webpack_require__(31)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('form', {
	            url: '/form',
	            controller: 'FormCtrl as form',
	            template: __webpack_require__(23),
	            data: {
	                title: 'Form'
	            }
	        })
	})

	.controller('FormCtrl', function(){
	})

	.name

	;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('items', [
	    __webpack_require__(21)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('items', {
	            url: '/items',
	            template: '<item-list items="main.items"></item-list>',
	            data: {
	                title: 'Items'
	            }
	        })
	})

	.name

	;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('dashboard', [
	    __webpack_require__(21)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('dashboard', {
	            url: '/',
	            template: __webpack_require__(22),
	            data: {
	                title: 'Dashboard'
	            }
	        })
	})

	.name

	;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('form.grid1', [
	    __webpack_require__(21),
	    __webpack_require__(24)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('grid1', {
	            url: '/grid1',
	            parent: 'form',
	            controller: 'Grid1Ctrl as grid',
	            template: __webpack_require__(32)
	        })
	})

	.controller('Grid1Ctrl', function(Grid1Service, $log){
	    Grid1Service.query().$promise.then(
	        function success(items){
	            this.items = items;
	        }.bind(this),

	        function fail(reason){
	            $log.error(reason);
	        }
	    );

	    this.addItem = function(item){
	        item.active = !!item.active;

	        this.items.push(item);
	        this.item = {};

	        Grid1Service.save(item)
	            .$promise
	            .then(
	                function success(data){
	                    $log.debug(data);
	                },
	                function fail(reqson){}
	            )
	    }
	})

	.service('Grid1Service', function($resource){
	    var resource = $resource('/api/grid1');

	    return resource;
	})

	.name

	;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(2);

	module.exports = angular.module('form.grid2', [
	    __webpack_require__(21)
	])

	.config(function($stateProvider){
	    $stateProvider
	        .state('grid2', {
	            url: '/grid2',
	            parent: 'form',
	            template: '<h2>Grid 2</h2>'
	        })
	})

	.controller('Grid2Ctrl', function(){
	})

	.name

	;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<h3>Grid 1</h3>\r\n\r\n<input type=\"text\" ng-model=\"grid.search\" placeholder=\"Search\"/>\r\n\r\n<table class=\"table table-hover\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th>Name</th>\r\n\t\t\t<th>Description</th>\r\n\t\t\t<th>Active</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr ng-repeat=\"item in grid.items | filter:grid.search track by $index\">\r\n\t\t\t<td>{{item.name}}</td>\r\n\t\t\t<td>{{item.description}}</td>\r\n\t\t\t<td>{{item.active}}</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<form class=\"form-horizontal\">\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\r\n\t\t<div class=\"col-sm-10\">\r\n\t\t\t<input type=\"text\" id=\"name\" ng-model=\"grid.item.name\" />\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"desc\" class=\"col-sm-2 control-label\">Description</label>\r\n\t\t<div class=\"col-sm-10\">\r\n\t\t\t<input type=\"text\" id=\"desc\" ng-model=\"grid.item.description\" />\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" ng-model=\"grid.item.active\" /> Active\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t<button type=\"submit\" class=\"btn btn-default\" ng-click=\"grid.addItem(grid.item)\">Add</button>\r\n\t\t</div>\r\n\t</div>\r\n</form>"

/***/ }
]);