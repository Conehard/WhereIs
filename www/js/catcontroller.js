function CategoriesCtrl($scope, $http) {
	$scope.loading = true;
	$http.get('http://egendnetwork.com/whereis/categorias.php').success(function (data) {
	    $scope.categories = data;
	}).error(function (data) {
	    console.log("Erro na conexão");
	    $scope.erro = "Não foi possível obter as categorias, tenha certeza de estar conectado a internet para utilizar o aplicativo. Caso esteja e ainda esteja vendo este erro, aguarde alguns segundos e tente novamente.";
	}).finally(function () {
		$scope.loading = false;
	});
	var onSuccess = function(position) {
    $scope.latitude = position.coords.latitude;
    $scope.longitude = position.coords.longitude;
    $scope.latlong = $scope.latitude+','+$scope.longitude;

    $http.get('https://maps.google.com/maps/api/geocode/json?latlng='+$scope.latlong+'&sensor=false&key=AIzaSyD03iJeEEgdhw1O0oTK5qqtd2Iy6uAzJAE').success(function (data) {
        $scope.mapa = data;
        $scope.newmapa = $scope.mapa.results[0].address_components[3].long_name;
        $scope.mapaif = ('https://www.google.com/maps/embed/v1/place?key=AIzaSyDHPTHqWPfql51BBZv8bobUiRiik05ZT0o&q='+$scope.newmapa);
       
       // alert(JSON.stringify($scope.newmapa) );
    });
  };


  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  };
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

angular
  .module('whereIs')
  .controller('CategoriesCtrl', CategoriesCtrl);