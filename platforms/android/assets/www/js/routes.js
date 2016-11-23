function config($routeProvider, $locationProvider) {
  

  $routeProvider
    .when('/', {
      templateUrl: 'views/categories.html',
      controller: 'CategoriesCtrl'
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
    .when('/eventos', {
      templateUrl: 'views/eventos.html',
      controller: 'EventosCtrl'
    })
    .when('/alimentacao', {
      templateUrl: 'views/comercios.html',
      controller: 'AlimentacaoCtrl'
    })
    .when('/saude', {
      templateUrl: 'views/comercios.html',
      controller: 'SaudeCtrl'
    })
    .when('/escolas', {
      templateUrl: 'views/comercios.html',
      controller: 'EscolasCtrl'
    })
    .when('/hospedagem', {
      templateUrl: 'views/comercios.html',
      controller: 'HospedagemCtrl'
    })
    .when('/conveniencia', {
      templateUrl: 'views/comercios.html',
      controller: 'ConvenienciaCtrl'
    })
    .when('/lojas', {
      templateUrl: 'views/comercios.html',
      controller: 'LojasCtrl'
    })
    .when('/entretenimento', {
      templateUrl: 'views/comercios.html',
      controller: 'EntretenimentoCtrl'
    })
    .when('/pontos', {
      templateUrl: 'views/comercios.html',
      controller: 'PontosCtrl'
    })
    .when('/mercados', {
      templateUrl: 'views/comercios.html',
      controller: 'MercadosCtrl'
    })
    .when('/demais', {
      templateUrl: 'views/comercios.html',
      controller: 'DemaisCtrl'
    })
    .when('/configs', {
      templateUrl: 'views/configs.html',
      controller: 'ConfigsCtrl'
    })
    .when('/sobre', {
      templateUrl: 'views/sobre.html',
      controller: 'SobreCtrl'
    })

     .otherwise ({ redirectTo: '/' });
};

angular
  .module('whereIs')
  .config(config);