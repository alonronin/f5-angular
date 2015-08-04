'use strict';

var $ = require('jquery');
var _ = require('lodash');

$(function(){
   $('body .container p')
       .append(
            $('<div/>')
                .text('hello')
                .css('color', 'blue')
        );
});