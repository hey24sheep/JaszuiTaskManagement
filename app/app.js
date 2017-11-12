var App = angular.module('drag-and-drop', ['ngDragDrop']);

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

    // console.log(mainList);

    $scope.doSomething = function () {

        localStorage.setItem('mainList', JSON.stringify(mainList));
        localStorage.setItem('firstList', JSON.stringify(firstList));
        localStorage.setItem('secondList', JSON.stringify(secondList));
        localStorage.setItem('thirdList', JSON.stringify(thirdList));

        // console.log(mainList);

    };


    if(localStorage.getItem('mainList')){
        // $scope.list1.push(JSON.parse(localStorage.getItem('mainList')));

        // console.log(mainList);
    }
    // Limit items to be dropped in list1
    $scope.optionsList2 = {
        accept: function(dragEl) {
            if ($scope.list2.length >= 1) {
                return false;
            } else {
                return true;
            }
            console.log("i am here");
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

    // $scope.clearStorage = function () {
    //     localStorage.clear();
    // }
});





