function config($routeProvider, $locationProvider) {
  

  $routeProvider
    .when('/', {
      templateUrl: 'views/inicio.html',
      controller: 'InicioCtrl'
    })
    .when('/categories', {
      templateUrl: 'views/categories.html',
      controller: 'CategoriesCtrl'
    })
    .when('/social', {
      templateUrl: 'views/social.html',
      controller: 'SocialCtrl'
    })
    .when('/comercios', {
      templateUrl: 'views/comerciosall.html',
      controller: 'ComerciosCtrl'
    })
    .when('/alimentacao', {
      templateUrl: 'views/comercios.html',
      controller: 'AlimentacaoCtrl'
    })
    .when('/saude', {
      templateUrl: 'views/comercios.html',
      controller: 'SaudeCtrl'
    })
    .when('/hospedagem', {
      templateUrl: 'views/comercios.html',
      controller: 'HospedagemCtrl'
    })
    .when('/conveniencia', {
      templateUrl: 'views/comercios.html',
      controller: 'ConvenienciaCtrl'
    })
    .when('/entretenimento', {
      templateUrl: 'views/comercios.html',
      controller: 'EntretenimentoCtrl'
    })
    .when('/demais', {
      templateUrl: 'views/comercios.html',
      controller: 'DemaisCtrl'
    })
    .when('/pontos', {
      templateUrl: 'views/comercios.html',
      controller: 'PontosCtrl'
    })
    .when('/configs', {
      templateUrl: 'views/configs.html',
      controller: 'ConfigsCtrl'
    })
    .when('/sobre', {
      templateUrl: 'views/sobre.html',
      controller: 'SobreCtrl'
    })
    .when('/eventos', {
      templateUrl: 'views/eventos.html',
      controller: 'EventosCtrl'
    })
    
    

     .otherwise ({ redirectTo: '/' });
};

angular
  .module('whereIs')
  .config(config);