/// <reference path="typings/browser.d.ts"/>
import "./templates";
import "./features/home/home";

export function start() {

    angular.element(document).ready( () => {

        angular.module("app", [
        "ngRoute",
        "app.templates"
        ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'features/home/home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/home'
            });
        }]);

        // manually bootstrap angular
        angular.bootstrap(document, ['app'], {strictDi: true});
    });
}


