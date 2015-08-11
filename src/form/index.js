var angular = require('angular');

module.exports = angular.module('form', [
    require('angular-ui-router')
])

.config(function($stateProvider){
    $stateProvider
        .state('form', {
            url: '/form',
            controller: 'FormCtrl as form',
            template: require('./form.html')
        })
})

.controller('FormCtrl', function(){
    this.title = 'Form';

    this.items = ['item 1', 'item 2'];
})

.name

;