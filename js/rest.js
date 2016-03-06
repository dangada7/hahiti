
var signup = function(userName, password, name, email){
	console.log(userName, password, name, email);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";

	$.ajax({
	  	url:'http://localhost:8080/hahiti/users',
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


var sendGetAllStudentRequest = function(groupID,addStudents){
	console.log("send get all student request",groupID);
	$.ajax({
	  	url:'http://localhost:8080/hahiti/allStudents/'+groupID,
	   	method : "GET",
	   	success: function(data) {
	   		console.log('success',data,groupID);
			addStudents(data);	   		
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendAddGroupRequest = function(groupName,groupNotes,userName,addGroupFunc){
	console.log("send add new group request",groupName, groupNotes, userName, addGroupFunc);
	$.ajax({
	  	url:'http://localhost:8080/hahiti/groups',
	   	method : "POST",
	   	data : '{"Name":"'+groupName+'","Description":"'+groupNotes+'","Owner":"'+userName+'"}',
	   	success: function(data) {
	   		console.log('success',data,groupID);
	   		addGroupFunc(groupName,groupNotes);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});

}