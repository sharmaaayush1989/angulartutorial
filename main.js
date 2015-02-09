var app = angular.module('demoApplication',[]);
app.controller('homeController',function($scope)
{
	console.log("Inside");
	var objArr = [{name:'Aayush',age:'25'},{name:'Sharma',age:'30'}];
	$scope.arrValue = objArr;
})