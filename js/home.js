$(document).ready(function(){

	var userName = sessionStorage.getItem('username');
	if(userName!=null){
		$("#loginButton").hide();
		$("#signinButton").hide();
	}else{
		$("#logoutButton").hide();
	}
	
	$("#logoutButton").click( function(){
		sessionStorage.setItem('username',none);
	});

	$("#title").html("Welcome to Hahiti, " + userName);

});