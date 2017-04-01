(function() {
  angular.module('mymeanblog')
        .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', 'PostService'];

  function DashboardController($scope, PostService){
      $scope.edit = edit;
      $scope.delete = deletePost;
      $scope.posts = []

      populatePosts();
      function populatePosts(){
        PostService.getAll()
                   .then(function(response){
                     $scope.posts = response.data.posts
                   })
                   .catch(function(err){
                     console.log(err);
                   });
      }
      function edit(post){
        console.log('moving to the edit page');
      }
      function deletePost(post){
        console.log('deleting the post with _id of ' + post._id);
      }
  }
}());
