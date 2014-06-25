var app = angular.module( 'myApp', [] );

app.run( init );
app.controller( 'Hola', hola );
app.controller( 'Adios', adios );

init.$inject = ['$rootScope'];
function init ( $rootScope ) {
  console.log( $rootScope );
  $rootScope.nombre = 'Daniel';
}

hola.$inject = ['$scope'];
function hola ( $scope ) {
  console.log('Hola : ');
  console.log( $scope );
}

adios.$inject = ['$scope'];
function adios ( $scope ) {
  console.log('Adios : ');
  console.log( $scope );
}
