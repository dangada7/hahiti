
//var BaseURL = "http://localhost:8080/hahiti";

var BaseURL = "hahiti.cloudapp.net";

var sendSignupRequest = function(userName, password, name, email, loginFunc){
	console.log(userName, password, name, email);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";

	$.ajax({
	  	url:BaseURL + '/users',
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
	  	url:BaseURL + '/login',
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
	  	url:BaseURL + '/allStudents/'+groupID,
	   	method : "GET",
	   	success: function(data) {
	   		console.log('success get all students',data,groupID);
			addStudents(data);	   		
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendAddGroupRequest = function(groupName,groupNotes,userName,refreshTable){
	console.log("send add new group request",groupName, groupNotes, userName);
	$.ajax({
	  	url:BaseURL + '/groups',
	   	method : "POST",
	   	data : '{"Name":"'+groupName+'","Description":"'+groupNotes+'","Owner":"'+userName+'","ImageURL":""'+'}',
	   	success: function(data) {
	   		console.log('successadd new group',data,groupName,groupNotes);
	   		refreshTable();
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendGetAllGroupsRequest = function(userName, addGroupsFunc){
		console.log("send get all groups request",userName);
		$.ajax({
		  	url:BaseURL + '/allGroups/'+userName,
		   	method : "GET",
		   	success: function(data) {
		   		console.log('success get all groups',userName,data);
				addGroupsFunc(data);	   		
		   	},
		   	error: function (ajaxContext) {
	        	alert(ajaxContext.responseText)
	  		}
		});
};

var sendAddNewStudentRequest = function(id, name, phone, email, groupid, addStudentFunc){

	 	console.log("send add new student request request",id,name,groupid);
		$.ajax({
		  	url:BaseURL + '/students/'+id,
		   	method : "POST",
		   	data : '{ "Id":"'+id+'","Name":"'+name+'","Phone":"'+phone+'","Email":"'+email+'","GroupId":"'+groupid+'","ImageURL":""'+'}',
		   	success: function(data) {
		   		console.log('success add new student',id,name,groupid,data);
				addStudentFunc(id, name, phone, email, "0", "0", "0");	   		
		   	},
		   	error: function (ajaxContext) {
	        	alert(ajaxContext.responseText)
	  		}
		});
};

var sendDeleteGroupRequest = function(groupID, owner, refreshTable){
 	console.log("send delete group request",groupID);
	$.ajax({
	  	url:BaseURL + '/groups/'+owner+','+groupID,
	   	method : "DELETE",
	   	success: function(data) {
	   		console.log('success delete group',groupID,data);
  			refreshTable();
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendDeleteStudentRequest = function(studentID, groupID, refreshTable){
 	console.log("send delete Student request",studentID,groupID);
	$.ajax({
	  	url:BaseURL + '/students/'+studentID+','+groupID,
	   	method : "DELETE",
	   	success: function(data) {
	   		console.log('success delete Student',studentID,groupID,data);
  			refreshTable();
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendGetAllReportRequest = function(userName, addReportsFunc){
	console.log("send get all reports request",userName);
	$.ajax({
	  	url:BaseURL + '/allReports/'+userName,
	   	method : "GET",
	   	success: function(data) {
	   		console.log('success get all reports',userName,data);
			addReportsFunc(data);	   		
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendDeleteReportRequest = function(groupID, owner, date, refreshTable){
 	console.log("send delete report request",groupID);
	$.ajax({
	  	url:BaseURL + '/reports/'+owner+','+groupID+','+date,
	   	method : "DELETE",
	   	success: function(data) {
	   		console.log('success delete reprot',groupID, owner, date, data);
  			refreshTable();
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var sendAddNewReportRequest = function(ownerName, GroupId, GroupName, Summary, addReportFunc){

	 	console.log("send add new report request",ownerName,GroupId,GroupName,Summary);
		$.ajax({
		  	url:BaseURL + '/reports',
		   	method : "POST",
		   	data : '{"Submitter":"'+ownerName+'","GroupId":"'+GroupId+'","GroupName":"'+GroupName+'","Summary":"'+Summary+'}',
		   	success: function(data) {
		   		console.log('success add new report',ownerName,GroupId,GroupName,Summary,data);
				addReportFunc("now",GroupName, Summary,GroupId);  		
		   	},
		   	error: function (ajaxContext) {
	        	alert(ajaxContext.responseText)
	  		}
		});
};



