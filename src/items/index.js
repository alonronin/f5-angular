var angular = require('angular');

module.exports = angular.module('items', [
    require('angular-ui-router')
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