function CategoriesCtrl($scope, $http) {
	$http.get('http://egendnetwork.com/categorias.php').success(function (data) {
	    $scope.categories = data;
	}).error(function (data) {
	    console.log("Erro na conexão");
	    $scope.erro = "Não foi possível obter as categorias, por favor, faça a seleção pelo menu. Caso você não esteja conectado a internet conecte para que possa usar o aplicativo.";

	});

}

angular
  .module('whereIs')
  .controller('CategoriesCtrl', CategoriesCtrl);