var app = angular.module( 'myApp', [] );

app.run( init );
app.controller( 'Hola', hola );
app.controller( 'Adios', adios );
app.service( 'Usuario', usuario );

init.$inject = ['$rootScope', 'Usuario'];
function init ( $rootScope, Usuario ) {
  console.log( $rootScope );
  $rootScope.nombre = Usuario.nombre;
}

hola.$inject = ['$scope', 'Usuario'];
function hola ( $scope, Usuario ) {
  console.log( 'Hola : ' );
  console.log( $scope );
  $scope.nombre = Usuario.nombre;
}

adios.$inject = ['$scope', 'Usuario'];
function adios ( $scope, Usuario ) {
  console.log( 'Adios : ' );
  console.log( $scope );
  $scope.nombre = Usuario.nombre;
}

function usuario () {
  var user = {
    nombre: 'Pedro'
  };

  return user;
}
