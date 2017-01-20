var app = angular.module('guides', ['ngRoute'])

app.config(($routeProvider, $locationProvider)=>{
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller : 'GuideCtrl',
            templateUrl : 'app/partials/guides.html'
        })
})
