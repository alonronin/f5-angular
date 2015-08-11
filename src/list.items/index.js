var angular = require('angular');

module.exports = angular.module('f5.directives', [])

.controller('ListCtrl', function(){
    this.addItem = function(item){
        this.items.push(item);
        this.item = '';
    };

    this.removeItem = function(item){
        _.remove(this.items, function(i){
            return i === item;
        });
    };
})

.directive('itemList', function(){
    return {
        restrict: 'E',
        scope: {
            items: '='
        },
        controller: 'ListCtrl as list',
        bindToController: true,
        template: require('./list.items.html')
    }
})

.name;