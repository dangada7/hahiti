$(document).ready(function(){

	$("#signinForm").submit(function(){
		alert("tnx man");
		$(location).attr('href', 'home.html');
		alert("tnx man");
	});


	$("#signup_form").submit(function(){
		alert("signup_form");
		var name = $("#inputName").val();
		var email = $("#inputEmail").val();
		var username = $("#inputUser").val();
		var password = $("#inputPassword").val();

		addUser(username,password,name,email);
	});

});