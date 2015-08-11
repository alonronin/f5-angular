var angular = require('angular');

module.exports = angular.module('dashboard', [
    require('angular-ui-router')
])

.config(function($stateProvider){
    $stateProvider
        .state('dashboard', {
            url: '/',
            template: require('./dashboard.html'),
            data: {
                title: 'Dashboard'
            }
        })
})

.name

;