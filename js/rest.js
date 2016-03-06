
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

var AddStudents  = function(data,addStudent){
  var students = jQuery.parseJSON(data);
	alert("AddStudents=" + data);
  var j;
  //Name, Phone, Email, Id
  for (j = 0; j < students.length; j++) {
     addStudent(students[j].Name,students[j].Phone);
  }
}


var getAndAddStudents = function(groupID,addStudent){
	console.log("getStudents",groupID);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";
	$.ajax({
	  	url:'http://localhost:8080/hahiti/allStudents/'+groupID,
	   	method : "GET",
	   	success: function(data) {
	   		console.log('success',data,groupID);
			AddStudents(data,addStudent);	   		
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};
