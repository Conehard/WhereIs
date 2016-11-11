function AlimentacaoCtrl($scope, $http) {

  var onSuccess = function(position) {
    $scope.latitude = position.coords.latitude;
    $scope.longitude = position.coords.longitude;
    $scope.latlong = $scope.latitude+','+$scope.longitude;
    
    $http.get('https://maps.google.com/maps/api/geocode/json?latlng='+$scope.latlong+'&sensor=false&key=AIzaSyD03iJeEEgdhw1O0oTK5qqtd2Iy6uAzJAE').success(function (data) {
        $scope.mapa = data;
        $scope.newmapa = $scope.mapa.results[0].address_components[3].long_name;
        $scope.isStatusL = function(com){
		    return (com.cidade == $scope.newmapa);
		};
    });
  };

  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  };

navigator.geolocation.getCurrentPosition(onSuccess, onError);
	$http.get('http://egendnetwork.com/categorias.php').success(function (data) {
	    $scope.categories = data;
	    $scope.idcategoria = 1;
	   	$scope.isStatus = function(cat){
		    return (cat.ID == $scope.idcategoria);
		};
	}).error(function (data) {
	    console.log("Erro na conexão categorias");
	});

	$http.get('http://egendnetwork.com/comercios.php').success(function (datacomercio) {
	    $scope.comercio = datacomercio;
	    $scope.filterSub = { };
	    $scope.isStatusC = function(com){
		    return (com.idcategoria == $scope.idcategoria);
		};
	}).error(function (datacomercio) {
	    console.log("Erro em obter os comercios");
	});

	
	
};

angular
  .module('whereIs')
  .controller('AlimentacaoCtrl', AlimentacaoCtrl);