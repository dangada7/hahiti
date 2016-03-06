
var signup = function(userName, password, name, email){
	console.log(userName, password, name, email);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";

	$.ajax({
	  	url:'http://localhost:8080/hahiti/users',
	  	//url:'http://requestb.in/1hbp2f91',
	   	method : "POST",
	   	data : '{"Username":"'+userName+'","Password":"'+password+'","Name":"'+name+'","Email":"'+email+'","Settings":"'+defualtSetting+'"}',
	   	success: function(data) {
	   		console.log('success',data);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var groups = {}; 

// Id, Name, Description, Students, 
var parseSignin = function(dat){
	var obj = jQuery.parseJSON(data);
	groups = obj;

	for(i=0; i < obj.length; i++){
		console.log('Id',obj[i].Id);
		console.log('Name',obj[i].Name);
		console.log('Description',obj[i].Description);
		console.log('Students',obj[i].Students);
	}
};







var signin = function(userName, password){
	console.log(userName, password);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";
	$.ajax({
	  	url:'http://localhost:8080/hahiti/login',
	  	//url:'http://requestb.in/1hbp2f91',
	   	method : "POST",
	   	data : '{"Username":"'+userName+'","Password":"'+password+'"}',
	   	success: function(data) {
	   		console.log('success',data);
	   		sessionStorage.setItem("username",userName);
	   		window.location.replace("home.html");
	   		parseSignin(data)
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};



