var App = angular.module('drag-and-drop', ['ngDragDrop']);
App.controller('oneCtrl', function($scope) {


    //List for User1
    $scope.list1 = [];
    //List for User2
    $scope.list2 = [];
    //List for User3
    $scope.list3 = [];

    //All items List
    $scope.list5 = [
        { 'title': 'Task 1', 'drag': true },
        { 'title': 'Task 2', 'drag': true },
        { 'title': 'Task 3', 'drag': true },
        { 'title': 'Task 4', 'drag': true },
        { 'title': 'Task 5', 'drag': true },
        { 'title': 'Task 6', 'drag': true },
        { 'title': 'Task 7', 'drag': true },
        { 'title': 'Task 8', 'drag': true },
        { 'title': 'Task 9', 'drag': true },
        { 'title': 'Task 10', 'drag': true },
        { 'title': 'Task 11', 'drag': true },
        { 'title': 'Task 12', 'drag': true },
        { 'title': 'Task 13', 'drag': true },
        { 'title': 'Task 14', 'drag': true },
        { 'title': 'Task 15', 'drag': true }
    ];

    //Assign lists to array
    var mainList = $scope.list5;
    var firstList = $scope.list1;
    var secondList = $scope.list2;
    var thirdList = $scope.list3;

//function to save arrays into Local Storage
    $scope.saveDataIntoLocalStorage = function () {
        localStorage.setItem('mainList', angular.toJson(mainList));
        localStorage.setItem('firstList', angular.toJson(firstList));
        localStorage.setItem('secondList', angular.toJson(secondList));
        localStorage.setItem('thirdList', angular.toJson(thirdList));

    }
//Information for user
    $scope.additionalInfo = function () {
        alert("User can have only one task");
    }


    if(localStorage.getItem('mainList')){
        $scope.list5 = angular.fromJson(localStorage.getItem('mainList'));
        // console.log(mainList);
    }
    if(localStorage.getItem('firstList')){
        $scope.list1 = angular.fromJson(localStorage.getItem('firstList'));
        // console.log(firstList);
    }
    if(localStorage.getItem('secondList')){
        $scope.list2 = angular.fromJson(localStorage.getItem('secondList'));
        // console.log(secondList);
    }
    if(localStorage.getItem('thirdList')){
        $scope.list3 = angular.fromJson(localStorage.getItem('thirdList'));
        // console.log(thirdList);
    }

    // Limit items to be dropped in list
    $scope.optionsList1 = {
        accept: function(dragEl) {
            if ($scope.list1.length >= 1) {
                return false;
            } else {
                return true;
            }
        }
    };
    $scope.optionsList2 = {
        accept: function(dragEl) {
            if ($scope.list2.length >= 1) {
                return false;
            } else {
                return true;
            }
        }
    };
    $scope.optionsList3 = {
        accept: function(dragEl) {
            if ($scope.list3.length >= 1) {
                return false;
            } else {
                return true;
            }
        }
    };
    //Clear Local Storage
    $scope.clearStorage = function () {
        localStorage.clear();
        window.location.reload();
    }
});





