var app = angular.module("manejoDeRutas", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/", {
        template: 'Página principal<br><a ng-href="#/vista2">Ir a página secundaria</a>'
    });
    $routeProvider.when("/vista2", {
        templateUrl: 'vista2.html'
//vista2.html tiene 'Página secundaria<br><a ng-href="#/">Ir a página principal</a>'
    });
    $routeProvider.otherwise({ redirectTo: "/" });
});