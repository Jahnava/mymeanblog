(function() {
  angular.module('mymeanblog')
      .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var base = '/posts';
    function getAll(){
      return $http.get(base);
    }
    function getOne(id){
      var url = `${base}/${id}`;
      return $http.get(url);
    }
    function create(post){
      return $http.post(base, post);
    }
    function update(post){
      var url = `${base}/${post._id}`;
      return $http.put(url, post)
                  .then(function(response){
                    console.log(response);
                  });
    }
    function deletePost(post){
      var url = `${base}/${post._id}`;
      return $http.delete(url);
    }

    function randomPosts(number){
      var url = `/posts/random/${number}`;
      return $http.get(url);
    }

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deletePost,
      randomPosts: randomPosts
    }
  }
}());
