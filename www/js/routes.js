function config($routeProvider, $locationProvider) {
  

  $routeProvider

    .when('/', {
      templateUrl: 'views/categories.html',
      controller: 'CategoriesCtrl'
    })
    .when('/social', {
      templateUrl: 'views/social.html',
      controller: 'SocialCtrl'
    })
    .when('/comercios', {
      templateUrl: 'views/comercios.html',
      controller: 'ComerciosCtrl'
    })


     .otherwise ({ redirectTo: '/' });
};

angular
  .module('whereIs')
  .config(config);