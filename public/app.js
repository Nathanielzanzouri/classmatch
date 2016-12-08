var app = angular.module("studentlist", []);

app.controller('MainCtrl', function ($scope,$http) {
  $scope.students = [];
  
  /*var fileX = { "pupils": [] };
  $scope.searchArray = fileX.pupils;*/
  // $scope.searchArray = [];
 

   $http.get('/students').success(function(data){
    console.log(data);
    $scope.students = data;
  });

  $scope.addstudent = function (e) {
    if ($scope.name === '') { return; }

    var student = { 
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone,
      picture: $scope.picture,
      strength: $scope.strength,
      weakness: $scope.weakness

    };

    $scope.name = '';
    $scope.email = '';
    $scope.abv = '';
    $scope.phone = '';
    $scope.picture = '';
    $scope.strength = '';
    $scope.weakness = '';

    $http.post('/students', student).then(function (response) {
    $scope.students.push(response.data);
  });
};

  $scope.searchbar = function () {
    $scope.searchArray = [];
    $http.get("/Route/" + $scope.Search).success(function(data){
      console.log(data);
      $scope.searchArray = data; //instead of push, so that the arrays don't become nested
      console.log($scope.searchArray);
    });

     
    //
  };


  $scope.removeStudent = function (index) {
    $scope.students.splice(index, 1);
  };
});