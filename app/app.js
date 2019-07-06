var App = angular.module('drag-and-drop', ['ngDragDrop']);
// localStorage.clear();
App.controller('oneCtrl', function($scope) {

    $scope.list1 = [];
    $scope.list2 = [];
    $scope.list3 = [];

    $scope.list5 = [
        { 'title': 'Item 1', 'drag': true },
        { 'title': 'Item 2', 'drag': true },
        { 'title': 'Item 3', 'drag': true },
        { 'title': 'Item 4', 'drag': true },
        { 'title': 'Item 5', 'drag': true },
        { 'title': 'Item 6', 'drag': true },
        { 'title': 'Item 7', 'drag': true },
        { 'title': 'Item 8', 'drag': true },
        { 'title': 'Item 9', 'drag': true },
        { 'title': 'Item 10', 'drag': true },
        { 'title': 'Item 11', 'drag': true },
        { 'title': 'Item 12', 'drag': true },
        { 'title': 'Item 13', 'drag': true },
        { 'title': 'Item 14', 'drag': true },
        { 'title': 'Item 15', 'drag': true }
    ];

    var mainList = $scope.list5;
    var firstList = $scope.list1;
    var secondList = $scope.list2;
    var thirdList = $scope.list3;

    console.log(mainList);

    $scope.doSomething = function () {
        localStorage.setItem('mainList', angular.toJson(mainList));
        localStorage.setItem('firstList', angular.toJson(firstList));
        localStorage.setItem('secondList', angular.toJson(secondList));
        localStorage.setItem('thirdList', angular.toJson(thirdList));
        console.log(mainList);
        console.log(firstList);
        console.log(secondList);
        console.log(thirdList);
    }

    $scope.additionalInfo = function () {
        alert("User can have only one task");
        alert("You can keep data in local storage but after refresh\n $$hashKey " +
            "automatically changed so even if array is in local storage of the browser so You cannot see item inside user box.");
    }


    if(localStorage.getItem('mainList')){
        //this will assign the array stored in ls to the list1 var
        $scope.list5 = angular.fromJson(localStorage.getItem('mainList'));
        console.log(mainList);
    }
    if(localStorage.getItem('firstList')){
        //this will assign the array stored in ls to the list1 var
        $scope.list1 = angular.fromJson(localStorage.getItem('firstList'));
        console.log(firstList);
    }
    if(localStorage.getItem('secondList')){
        //this will assign the array stored in ls to the list1 var
        $scope.list2 = angular.fromJson(localStorage.getItem('secondList'));
        console.log(secondList);
    }
    if(localStorage.getItem('thirdList')){
        //this will assign the array stored in ls to the list1 var
        $scope.list3 = angular.fromJson(localStorage.getItem('thirdList'));
        console.log(thirdList);
    }



    // Limit items to be dropped in list1
    $scope.optionsList2 = {
        accept: function(dragEl) {
            if ($scope.list2.length >= 1) {
                return false;
            } else {
                return true;
            }
        }
    };
    $scope.optionsList1 = {
        accept: function(dragEl) {
            if ($scope.list1.length >= 1) {
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
    $scope.clearStorage = function () {
        localStorage.clear();
        alert("Hit F5 after clear storage button");
    }
});





