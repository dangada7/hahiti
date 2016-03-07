$(document).ready(function(){

	//sessionStorage.setItem('username',"victor");
	//sessionStorage.removeItem('username');

	var userName = sessionStorage.getItem('username');

	if(userName==null ||userName=="logout"){
		$("#logoutButton").hide();
	}else{
		$("#loginButton").hide();
		$("#signupButton").hide();
		$("#userName").html(userName);

		// $("#title").html("Welcome back, " + userName);
		// $("#subtitle").hide();
	}
	
	$("#logoutButton").click( function(){
		sessionStorage.removeItem('username');
	});

	

});