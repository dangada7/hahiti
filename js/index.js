$(document).ready(function(){

	$("#signup_form").submit(function(event){
	
		// Stop form from submitting normally
		event.preventDefault();
		 
		var name = $("#inputName").val();
		var email = $("#inputEmail").val();
		var username = $("#inputUser").val();
		var password = $("#inputPassword").val();

		signup(username,password,name,email);
	});

	$("#signin_form").submit(function(){
		// Stop form from submitting normally
		event.preventDefault();
		 
		var username = $("#signin_inputUser").val();
		var password = $("#signin_inputPassword").val();

		signin(username,password);

	});

});