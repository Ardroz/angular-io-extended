var app = angular.module( 'myApp', [] );

app.run( init );

init.$inject = ['$rootScope'];
function init ( $rootScope ) {
  console.log( $rootScope );
  $rootScope.nombre = 'Daniel';
}
