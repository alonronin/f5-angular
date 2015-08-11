var angular = require('angular');

module.exports = angular.module('form.grid1', [
    require('angular-ui-router'),
    require('angular-resource')
])

.config(function($stateProvider){
    $stateProvider
        .state('grid1', {
            url: '/grid1',
            parent: 'form',
            controller: 'Grid1Ctrl as grid',
            template: require('./grid1.html')
        })
})

.controller('Grid1Ctrl', function(Grid1Service, $log){
    Grid1Service.query().$promise.then(
        function success(items){
            this.items = items;
        }.bind(this),

        function fail(reason){
            $log.error(reason);
        }
    );

    this.addItem = function(item){
        item.active = !!item.active;

        this.items.push(item);
        this.item = {};

        Grid1Service.save(item)
            .$promise
            .then(
                function success(data){
                    $log.debug(data);
                },
                function fail(reqson){}
            )
    }
})

.service('Grid1Service', function($resource){
    var resource = $resource('/api/grid1');

    return resource;
})

.name

;