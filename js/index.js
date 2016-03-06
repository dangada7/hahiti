$(document).ready(function(){

	
	var loginFunc = function(userName){
	   	sessionStorage.setItem("username",userName);
	   	window.location.replace("home.html");
	} 

	$("#signup_form").submit(function(event){
	
		// Stop form from submitting normally
		event.preventDefault();
		 
		var name = $("#inputName").val();
		var email = $("#inputEmail").val();
		var username = $("#inputUser").val();
		var password = $("#inputPassword").val();

		sendSignupRequest(username,password,name,email,loginFunc);
	});



	$("#signin_form").submit(function(){
		// Stop form from submitting normally
		event.preventDefault();
		 
		var username = $("#signin_inputUser").val();
		var password = $("#signin_inputPassword").val();

		sendSigninRequest(username,password,loginFunc);

	});

});