$(document).ready(function(){

	var userName = sessionStorage.getItem('username');
	if(userName!=null){
		$("#loginButton").hide();
	}

	$("#title").html("Welcome to Hahiti, " + userName);
	

});