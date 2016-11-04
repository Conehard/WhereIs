function CategoriesCtrl($scope, $http) {
	$http.get('http://egendnetwork.com/categorias.php').success(function (data) {
	    $scope.categories = data;
	}).error(function (data) {
	    console.log("Erro na conexão");
	    

	});

}

angular
  .module('whereIs')
  .controller('CategoriesCtrl', CategoriesCtrl);