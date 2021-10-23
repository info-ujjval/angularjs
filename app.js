var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'resources/home.html'
	}).when('/home', {
		templateUrl: 'resources/home.html'
	}).when('/employee', {
		templateUrl: 'resources/employee.html',
	}).when('/payslips', {
		templateUrl: 'resources/payslips.html',
	}).when('/createEmployee', {
		templateUrl: 'resources/createEmployee.html',
	}).when('/viewEmployee', {
		templateUrl: 'resources/viewEmployeeList.html',
	}).when('/updateEmployee', {
		templateUrl: 'resources/updateEmployee.html',
	});
});
app.controller("MainController",['$scope',function($scope){
	
	
	
}]);