var angular = require('angular');

module.exports = angular.module('items', [
    require('angular-ui-router')
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