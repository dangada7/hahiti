$(document).ready(function(){

	var userName = sessionStorage.getItem('username');

	$("title").html("Welcome to Hahiti, " + userName);
	

});