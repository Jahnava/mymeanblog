(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope',
                            'PostService',
                            '$routeParams',
                            'UserService',
                            '$location'];

  function PostController($scope, PostService, $routeParams, UserService, $location){
    $scope.create = create;

    function create(post){
      var userId = UserService.currentUser()._id;
      post.author = userId;
      PostService.create(post)
                 .then(function(){
                   $location.path('/dashboard');
                 })
                 .catch(function(err){
                   console.log(err);
                 });
    }
  }
}());
