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