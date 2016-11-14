function CategoriesCtrl($scope, $http) {
	$http.get('http://egendnetwork.com/categorias.php').success(function (data) {
	    $scope.categories = data;
	}).error(function (data) {
	    console.log("Erro na conexão");
	    $scope.erro = "Não foi possível obter as categorias, tenha certeza de estar conectado a internet para utilizar o aplicativo. Caso esteja e ainda esteja vendo este erro, aguarde alguns segundos e tente novamente.";

	});

}

angular
  .module('whereIs')
  .controller('CategoriesCtrl', CategoriesCtrl);