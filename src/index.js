'use strict';

var $ = require('jquery');
var _ = require('lodash');

var angular = require('angular');

angular.module('f5', [
    require('./list.items')
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

