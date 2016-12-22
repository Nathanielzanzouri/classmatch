 .var app = angular.module('studentlist', []);

app.controller('MainCtrl', function ($scope,$http) {
  $scope.students = [];

   $http.get('/students').success(function(data){
    console.log(data);
    $scope.students = data;
  })

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
      $scope.searchArray = data;
      console.log($scope.searchArray);

    });

}
    $scope.searchbar2 = function () {
      $scope.searchArray2 = [];
    $http.get("/Route2/" + $scope.Search2).success(function(data){
      $scope.searchArray2 = data;
      console.log($scope.searchArray2);
    });


     
    //
  }


  $scope.removeStudent = function (index) {
    $scope.students.splice(index, 1);
  };
});