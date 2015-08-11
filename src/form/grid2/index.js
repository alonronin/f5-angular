var angular = require('angular');

module.exports = angular.module('form.grid2', [
    require('angular-ui-router')
])

.config(function($stateProvider){
    $stateProvider
        .state('grid2', {
            url: '/grid2',
            parent: 'form',
            template: '<h2>Grid 2</h2>'
        })
})

.controller('Grid2Ctrl', function(){
})

.name

;