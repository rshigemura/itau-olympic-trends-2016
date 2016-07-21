
/**************************
 Initialize the Angular App
 **************************/

var app = angular.module("app", ["ngRoute", "ngAnimate","ngAria","ngMessages","ngMaterial","app.config", "ui.bootstrap", "easypiechart","app.material", "mgo-angular-wizard","ui.tree", "ngMap", "ngTagsInput", "app.ui.ctrls", "app.ui.services", "app.controllers", "app.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.map", "app.task", "app.chart.ctrls", "app.chart.directives","countTo","app.music"]).run(["$rootScope", "$location",
    function ($rootScope, $location) {

        $(document).ready(function(config){

            setTimeout(function(){
                $('.page-loading-overlay').addClass("loaded");
                $('.load_circle_wrapper').addClass("loaded");
            },1000);

        });

    }] ).config(["$routeProvider",
    function($routeProvider) {
        return $routeProvider.when("/", {
            redirectTo: "/dashboard"
        }).when("/dashboard", {
                templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/dashboard/dashboard", {
              templateUrl: "app/views/dashboards/dashboard.html"
            }).when("/dashboard/dashboard1", {
                templateUrl: "app/views/dashboards/dashboard1.html"
            }).when("/dashboard/dashboard2", {
                templateUrl: "app/views/dashboards/dashboard2.html"
            }).when("/ui/typography", {
                templateUrl: "app/views/ui_elements/typography.html"
            }).when("/ui/buttons", {
                templateUrl: "app/views/ui_elements/buttons.html"
            }).when("/ui/cards", {
                templateUrl: "app/views/ui_elements/cards.html"
            }).when("/ui/material-icons", {
                templateUrl: "app/views/ui_elements/icons.html"
            }).when("/ui/icons", {
                templateUrl: "app/views/ui_elements/icons.html"
            }).when("/ui/grids", {
                templateUrl: "app/views/ui_elements/grids.html"
            }).when("/ui/widgets", {
                templateUrl: "app/views/ui_elements/widgets.html"
            }).when("/ui/components", {
                templateUrl: "app/views/ui_elements/components.html"
            }).when("/ui/material-design", {
                templateUrl: "app/views/ui_elements/material.html"
            }).when("/ui/timeline", {
                templateUrl: "app/views/ui_elements/timeline.html"
            }).when("/ui/nested-lists", {
                templateUrl: "app/views/ui_elements/nested-lists.html"
            }).when("/forms/elements", {
                templateUrl: "app/views/forms/elements.html"
            }).when("/forms/layouts", {
                templateUrl: "app/views/forms/layouts.html"
            }).when("/forms/validation", {
                templateUrl: "app/views/forms/validation.html"
            }).when("/forms/wizard", {
                templateUrl: "app/views/forms/wizard.html"
            }).when("/maps/gmap", {
                templateUrl: "app/views/maps/gmap.html"
            }).when("/maps/jqvmap", {
                templateUrl: "app/views/maps/jqvmap.html"
            }).when("/tables/static", {
                templateUrl: "app/views/tables/static.html"
            }).when("/tables/responsive", {
                templateUrl: "app/views/tables/responsive.html"
            }).when("/tables/dynamic", {
                templateUrl: "app/views/tables/dynamic.html"
            }).when("/charts/others", {
                templateUrl: "app/views/charts/charts.html"
            }).when("/charts/morris", {
                templateUrl: "app/views/charts/morris.html"
            }).when("/charts/chartjs", {
                templateUrl: "app/views/charts/chartjs.html"
            }).when("/charts/flot", {
                templateUrl: "app/views/charts/flot.html"
            }).when("/mail/inbox", {
                templateUrl: "app/views/mail/inbox.html"
            }).when("/mail/compose", {
                templateUrl: "app/views/mail/compose.html"
            }).when("/mail/single", {
                templateUrl: "app/views/mail/single.html"
            }).when("/pages/features", {
                templateUrl: "app/views/pages/features.html"
            }).when("/pages/signin", {
                templateUrl: "app/views/pages/signin.html"
            }).when("/pages/signup", {
                templateUrl: "app/views/pages/signup.html"
            }).when("/pages/forgot", {
                templateUrl: "app/views/pages/forgot-password.html"
            }).when("/pages/profile", {
                templateUrl: "app/views/pages/profile.html"
            }).when("/404", {
                templateUrl: "app/views/pages/404.html"
            }).when("/pages/500", {
                templateUrl: "app/views/pages/500.html"
            }).when("/pages/contact", {
                templateUrl: "app/views/pages/contact.html"
            }).when("/tasks", {
                templateUrl: "app/views/tasks/tasks.html"
            }).otherwise({
                redirectTo: "/404"
            });
    }
]).config(function($mdThemingProvider,$mdGestureProvider) {

  $mdGestureProvider.skipClickHijack();

  $mdThemingProvider.theme('default')
        .primaryPalette('cyan',{
            'default': '800'
        })
        .accentPalette('grey',{
            'default': '800'
        })
        /*.primaryPalette('deep-orange',{
          'default': '600'
        })
        .accentPalette('grey',{
          'default': '900'
        })*/
        /*.primaryPalette('indigo',{
          'default': '500'
        })
        .accentPalette('grey',{
          'default': '600'
        })*/
        ;
});

/**************************
 Timer
 **************************/
angular.module('countTo', []).controller("countTo", ["$scope",
        function($scope) {

            return $scope.countersmall1 = {
                countTo: 20,
                countFrom: 0
            },$scope.countersmall2 = {
                countTo: 42,
                countFrom: 0
            },$scope.countersmall3 = {
                countTo: 90,
                countFrom: 0
            },$scope.countersmall1dash = {
                countTo: 420,
                countFrom: 0
            },$scope.countersmall2dash = {
                countTo: 742,
                countFrom: 0
            },$scope.countersmall3dash = {
                countTo: 100,
                countFrom: 0
            };

        }]).directive('countTo', ['$timeout', function ($timeout) {
        return {
            replace: false,
            scope: true,
            link: function (scope, element, attrs) {

                var e = element[0];
                var num, refreshInterval, duration, steps, step, countTo, value, increment;

                var calculate = function () {
                    refreshInterval = 30;
                    step = 0;
                    scope.timoutId = null;
                    countTo = parseInt(attrs.countTo) || 0;
                    scope.value = parseInt(attrs.value, 10) || 0;
                    duration = (parseFloat(attrs.duration) * 1000) || 0;

                    steps = Math.ceil(duration / refreshInterval);
                    increment = ((countTo - scope.value) / steps);
                    num = scope.value;
                };

                var tick = function () {
                    scope.timoutId = $timeout(function () {
                        num += increment;
                        step++;
                        if (step >= steps) {
                            $timeout.cancel(scope.timoutId);
                            num = countTo;
                            e.textContent = countTo;
                        } else {
                            e.textContent = Math.round(num);
                            tick();
                        }
                    }, refreshInterval);

                };

                var start = function () {
                    if (scope.timoutId) {
                        $timeout.cancel(scope.timoutId);
                    }
                    calculate();
                    tick();
                };

                attrs.$observe('countTo', function (val) {
                    if (val) {
                        start();
                    }
                });

                attrs.$observe('value', function (val) {
                    start();
                });

                return true;
            }
        };

    }]);