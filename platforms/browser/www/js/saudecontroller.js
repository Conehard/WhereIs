function SaudeCtrl($scope, $http) {
	$http.get('http://egendnetwork.com/categorias.php').success(function (data) {
	    $scope.categories = data;
	    $scope.idcategoria = 2;
	   
	$scope.isStatus = function(cat){
	    return (cat.ID == $scope.idcategoria);
	};

	}).error(function (data) {
	    console.log("Erro na conexão categorias");
	    

	});


	$http.get('http://egendnetwork.com/comercios.php').success(function (data) {
	    $scope.comercio = data;
	}).error(function (data) {
	    console.log("Erro em obter os comercios");
	});
	
}

angular
  .module('whereIs')
  .controller('SaudeCtrl', SaudeCtrl);