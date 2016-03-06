$(document).ready(function(){

	$("#signinForm").submit(function(){
		alert("tnx man");
		$(location).attr('href', 'home.html');
		alert("tnx man");
	});


	$("#signupForm").submit(function(){
		var username = $("#signup_username").val();
		var password = $("#signup_password").val();
		var name = $("#signup_name").val();
		var email = $("#signup_Email").val();

		
		addUser(username,password,name,email);
	});

});