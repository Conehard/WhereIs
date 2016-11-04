function CategoriesCtrl($scope, $http) {
	$http.get('http://egendnetwork.com/categorias.php').success(function (data) {
    $scope.categories = data;
});
}

angular
  .module('whereIs')
  .controller('CategoriesCtrl', CategoriesCtrl);