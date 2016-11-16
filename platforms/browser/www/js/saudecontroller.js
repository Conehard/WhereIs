function AlimentacaoCtrl($scope, $http) {
  $scope.loading = true;
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
		$http.get('http://egendnetwork.com/comercios.php?cidade='+$scope.newmapa).success(function (datacomercio) {
		    $scope.comercio = datacomercio;
		    $scope.filterSub = { };
		    $scope.isStatusC = function(com){
			    return (com.idcategoria == $scope.idcategoria);
			};
			$scope.abrirMapa = function (com){
				$scope.latitudelocal = com.latitude;
				$scope.longitudelocal = com.longitude;
	    		var ref = window.open("https://www.google.com.br/maps/dir/'"+$scope.latlong+"'/'"+$scope.latitudelocal+','+$scope.longitudelocal+"'/", '_blank', 'location=no, closebuttoncaption=Voltar');
	   		};
		}).error(function (datacomercio) {
		    console.log("Erro em obter os comercios");
		    $scope.erro = "Não foi possível obter os comercios, tenha certeza de estar conectado a internet para utilizar o aplicativo. Caso esteja e ainda esteja vendo este erro, aguarde alguns segundos e tente novamente.";
		}).finally(function () {
			$scope.loading = false;
	    });
    });
  };

	function onError(error) {
		alert('code: '    + error.code    + '\n' +
        	  'message: ' + error.message + '\n');
	};
	navigator.geolocation.getCurrentPosition(onSuccess, onError);

	$http.get('http://egendnetwork.com/categorias.php').success(function (data) {
	    $scope.categories = data;
	    $scope.idcategoria = 2;
	   	$scope.isStatus = function(cat){
		    return (cat.ID == $scope.idcategoria);
		};
	}).error(function (data) {
	    console.log("Erro na conexão categorias");
	    $scope.erro = "Não foi possível obter as categorias, tenha certeza de estar conectado a internet para utilizar o aplicativo. Caso esteja e ainda esteja vendo este erro, aguarde alguns segundos e tente novamente.";
	});
};

angular
  .module('whereIs')
  .controller('AlimentacaoCtrl', AlimentacaoCtrl);