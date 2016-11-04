function CategoriesCtrl($scope) {
  $scope.categories = [
    { name: 'Alimentação', desc: 'Restaurantes e bares', image: 'img/img.png' }

  ];
}

angular
  .module('whereIs')
  .controller('CategoriesCtrl', CategoriesCtrl);