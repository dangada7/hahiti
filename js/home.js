$(document).ready(function(){

	var userName = sessionStorage.getItem('username');
	if(userName!=null){
		$("#loginButton").hide();
		$("#signinButton").hide();
	}else{
		$("#logoutButton").hide();
	}
	
	$("#logoutButton").click( function(){
		alert("logout");
		sessionStorage.setItem('username',null);
	});

	$("#title").html("Welcome to Hahiti, " + userName);

});