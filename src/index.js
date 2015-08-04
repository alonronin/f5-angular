'use strict';

var $ = require('jquery');
var _ = require('lodash');

var angular = require('angular');

angular.module('f5', [])

.controller('MainCtrl', function($scope, $timeout, ListItems){
    this.title = 'F5 Angular';
    this.items = ListItems.items;

    this.addItem = function(item){
        this.items.push(item);
        this.item = '';
    };

    this.removeItem = function(item){
        _.remove(this.items, function(i){
            return i === item;
        });
    };

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

