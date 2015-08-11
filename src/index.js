'use strict';

var $ = require('jquery');
var _ = require('lodash');
require('bootstrap');

var angular = require('angular');

angular.module('f5', [
    require('./list.items'),
    require('angular-ui-router')
])

.config(function($logProvider, $stateProvider){
    $logProvider.debugEnabled(true);

    $stateProvider
        .state('dashboard', {
            url: '/',
            template: require('./dashboard/dashboard.html')
        })
        .state('items', {
            url: '/items',
            template: '<h1>Items</h1><item-list items="main.items"></item-list><p><a ui-sref="form">Go to form</a></p>'
        })
        .state('form', {
            url: '/form',
            controller: 'FormCtrl as form',
            template: require('./form/form.html')
        })
})

.controller('MainCtrl', function($scope, $timeout, $log, ListItems){
    this.title = 'F5 Angular';
    this.items = ListItems.items;
})

.service('ListItems', function(){
    this.items = [
        'item 1',
        'item 2',
        'item 3'
    ]
})

;

require('./form/form.ctrl');