$(document).ready(function(){

	$("#signinForm").submit(function(){
		alert("tnx man");
		$(location).attr('href', 'home.html');
		alert("tnx man");
	});


	$("#signup_form").submit(function(event){
	
		// Stop form from submitting normally
		event.preventDefault();
		 
		var name = $("#inputName").val();
		var email = $("#inputEmail").val();
		var username = $("#inputUser").val();
		var password = $("#inputPassword").val();



		addUser(username,password,name,email);
	});

});