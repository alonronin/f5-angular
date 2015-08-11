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
    Grid1Service.query().then(
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
        .then(
            function success(data){
                $log.debug(data);
            },
            function fail(reqson){}
        )
    }
})

.service('Grid1Service', function($resource){

    /**
     *
     * @param name
     * @param description
     * @param active
     */
    var GridItem = function(
        name,
        description,
        active
    ){
        this.name = name;
        this.description = description;
        this.active = !!active;
    };

    var resource = $resource('/api/grid1');

    this.query = function() {
        return resource.query().$promise.then(function(data){
            return _.map(data, function(item){
                return new GridItem(item.name, item.description, item.active)
            })
        })
    };

    this.save = function(data){
        return resource.save(data).$promise;
    }
})

.name

;