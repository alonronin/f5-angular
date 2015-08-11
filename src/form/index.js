var angular = require('angular');

module.exports = angular.module('form', [
    require('angular-ui-router'),
    require('./grid1'),
    require('./grid2')
])

.config(function($stateProvider){
    $stateProvider
        .state('form', {
            url: '/form',
            controller: 'FormCtrl as form',
            template: require('./form.html'),
            data: {
                title: 'Form'
            }
        })
})

.controller('FormCtrl', function(){
})

.name

;