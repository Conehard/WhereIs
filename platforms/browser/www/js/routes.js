function config($routeProvider, $locationProvider) {
  

  $routeProvider

    .when('/', {
      templateUrl: 'views/categories.html',
      controller: 'CategoriesCtrl'
    })

     .otherwise ({ redirectTo: '/' });
};

angular
  .module('whereIs')
  .config(config);