function SocialCtrl($scope, $http) {
	$http.get('https://api.twitter.com/1.1/search/tweets.json?q=%23appwhereis&src=typd').success(function (data) {
	    $scope.tweets = data;
	}).error(function (data) {
	    console.log("Erro na conexão");
	});
}

angular
  .module('whereIs')
  .controller('SocialCtrl', SocialCtrl);