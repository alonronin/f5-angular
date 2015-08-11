'use strict';

var $ = require('jquery');
var _ = require('lodash');
require('bootstrap');

var angular = require('angular');

angular.module('f5', [
    require('angular-ui-router'),
    require('./list.items'),
    require('./dashboard'),
    require('./items'),
    require('./form')
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