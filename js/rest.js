
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




var signin = function(userName, password){
	console.log(userName, password);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";
	$.ajax({
	  	url:'http://localhost:8080/hahiti/login',
	  	//url:'http://requestb.in/1hbp2f91',
	   	method : "POST",
	   	data : '{"Username":"'+userName+'","Password":"'+password+'"}',
	   	success: function(data) {
	   		console.log('success',data,userName);

	   		sessionStorage.setItem("data",data);
	   		sessionStorage.setItem("username",userName);

	   		window.location.replace("home.html");
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};


var getStudents = function(groupID){
	console.log("getStudents",groupID);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";
	$.ajax({
	  	url:'http://localhost:8080/hahiti/allStudents/'+groupID,
	  	//url:'http://requestb.in/1hbp2f91',
	   	method : "GET",
	   	success: function(data) {
	   		console.log('success',data,groupID);

			return data;	   		
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};
