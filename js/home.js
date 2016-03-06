$(document).ready(function(){

	var userName = sessionStorage.getItem('username');
	if(userName!=null){
		$("#loginButton").hide();
		$("#signinButton").hide();
	}else{
		$("#logoutButton").hide();
	}

	$("#title").html("Welcome to Hahiti, " + userName);
	
	$("#logoutButton").onClick( function(){
		alert("logout");
	});


});