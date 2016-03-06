
var sendSignupRequest = function(userName, password, name, email, loginFunc){
	console.log(userName, password, name, email);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";

	$.ajax({
	  	url:'http://localhost:8080/hahiti/users',
	   	method : "POST",
	   	data : '{"Username":"'+userName+'","Password":"'+password+'","Name":"'+name+'","Email":"'+email+'","Settings":"'+defualtSetting+'"}',
	   	success: function(data) {
	   		console.log('success signup',userName,data);
	   		loginFunc(userName);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendSigninRequest = function(userName, password, loginFunc){
	console.log(userName, password);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";
	$.ajax({
	  	url:'http://localhost:8080/hahiti/login',
	   	method : "POST",
	   	data : '{"Username":"'+userName+'","Password":"'+password+'"}',
	   	success: function(data) {
	   		console.log('success login',userName,data);
			loginFunc(userName);
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
	   		console.log('success',data,groupName,groupNotes);
	   		addGroupFunc(groupName,groupNotes);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});

}

 var sendGetAllGroupsRequest = function(userName, addGroupsFunc){
	console.log("send get all groups request",userName);
	$.ajax({
	  	url:'http://localhost:8080/hahiti/allGroups/'+userName,
	   	method : "GET",
	   	success: function(data) {
	   		console.log('success',userName,data);
			addGroupsFunc(data);	   		
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
 }

 var sendAddNewStudentRequest = function(id, name, phone, email, groupid, addStudentFunc){

 	console.log("send get new student request request",id,name,groupid);
	$.ajax({
	  	url:'http://localhost:8080/hahiti/students/'+id,
	   	method : "POST",
	   	data : '{"Id":"'+id+'","Name":"'+name+'","Phone":"'+phone+'","Email":"'+email+'","GroupId":"'+groupid+'"}',
	   	success: function(data) {
	   		console.log('success',id,name,groupid,data);
			addStudentFunc(id, name, phone, email, "0", "0", "0");	   		
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});

 }