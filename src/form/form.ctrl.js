var angular = require('angular');

angular.module('f5')

.controller('FormCtrl', function(){
    this.title = 'Form';

    this.items = ['item 1', 'item 2'];
});