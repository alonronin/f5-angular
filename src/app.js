'use strict';

var angular = require('angular');
var $ = require('jquery');
var _ = require('lodash');

angular.module('f5', [
    require('angular-ui-router')
])

.config(function($urlRouterProvider, $locationProvider, $stateProvider){
        $urlRouterProvider.rule(function ($i, $location) {
            var path = $location.path();
            var normalized = path.toLowerCase();
            if (path != normalized) return normalized;
        });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('dashboard', {
                url: '/',
                template: '',
                data: {
                    title: 'Dashboard'
                }
            })

            .state('pages', {
                url: '/pages',
                template: '<ui-view/>',
                abstract: true,
                data: {
                    title: 'Sample pages'
                }
            })

            .state('pages.blank', {
                url: '/blank',
                template: '',
                data: {
                    title: 'Blank'
                }
            })

            .state('pages.login', {
                url: '/login',
                template: '',
                data: {
                    title: 'Login'
                }
            })
})

.controller('MainCtrl', function($scope, $state, Menu){
        var self = this;

        this.menu = Menu.items;

        this.abstract = function(item, e){
            var abstract = $state.get(item.state).abstract;
            if(abstract) e.preventDefault();
        };

        var setActiveMenu = function(url){
            var $ul = $('ul.nav a');
            $ul.removeClass('active');

            var element = $ul.filter(function () {
                return $(this).attr('href') === url;
            })
                .addClass('active')
                .parents('ul')
                .addClass('in')
                .parents('li')
                .addClass('active');
        };

        _.defer(function(){
            $('#side-menu').metisMenu();
        });

        $scope.$on('$stateChangeSuccess', function(){
            self.title = $state.current.data.title;

            var url = $state.href($state.current, null, {inherit: false});

            _.defer(function(){
                setActiveMenu(url)
            });
        });
})

.service('Menu', function(){
    this.items = [
        {
            title: 'Dashboard',
            icon: 'fa-dashboard',
            state: 'dashboard'
        },

        {
            title: 'Pages',
            icon: 'fa-files-o',
            state: 'pages',
            children: [
                {
                    title: 'Blank page',
                    icon: '',
                    state: 'pages.blank'
                },

                {
                    title: 'Login page',
                    icon: '',
                    state: 'pages.login'
                }
            ]
        }
    ]
})

;