function InicioCtrl($scope, $http) {

  var onSuccess = function(position) {
    $scope.latitude = position.coords.latitude;
    $scope.longitude = position.coords.longitude;
    $scope.latlong = $scope.latitude+','+$scope.longitude;
    $scope.iframemapa ='https://www.google.com/maps/embed/v1/directions?key=AIzaSyDHPTHqWPfql51BBZv8bobUiRiik05ZT0o&origin='+$scope.latlong+'&destination='+$scope.latlong;
    $http.get('https://maps.google.com/maps/api/geocode/json?latlng='+$scope.latlong+'&sensor=false&key=AIzaSyD03iJeEEgdhw1O0oTK5qqtd2Iy6uAzJAE').success(function (data) {
        $scope.mapa = data;
        $scope.newmapa = $scope.mapa.results[0].address_components[3].long_name;
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
  .controller('InicioCtrl', InicioCtrl);