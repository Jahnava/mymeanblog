(function() {
  angular.module('mymeanblog')
        .controller('EditController', EditController);

  EditController.$inject = ['$scope', '$routeParams', 'PostService'];

  function EditController($scope, $routeParams, PostService){
    $scope.edit = edit;

    editInit();
    function editInit(){
      var id = $routeParams.postId;
      PostService.getOne(id)
                  .then(function(response){
                    $scope.post = response.data.posts[0];
                  })
                  .catch(function(){
                    console.log('errror');
                  });
    }
    function edit(post){
      console.log('editing the post');
    }
  }

}());
