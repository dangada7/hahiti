$(document).ready(function(){

	var userName = sessionStorage.getItem('username');
	if(userName!=null ||userName!="logout"){
		$("#loginButton").hide();
		$("#signinButton").hide();
	}else{
		$("#logoutButton").hide();
	}
	
	$("#logoutButton").click( function(){
		sessionStorage.setItem('username',"logout");
	});

	$("#title").html("Welcome to Hahiti, " + userName);

});