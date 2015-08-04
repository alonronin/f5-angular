'use strict';

var $ = require('jquery');
var _ = require('lodash');

var angular = require('angular');

angular.module('f5', [])

.controller('MainCtrl', function($scope, ListItems){
    this.title = 'F5 Angular';
    this.items = ListItems.items;

    this.addItem = function(){
        this.items.push(this.item);
    };
})

.service('ListItems', function(){
    this.items = [
        'item 1',
        'item 2',
        'item 3'
    ]
})

;

