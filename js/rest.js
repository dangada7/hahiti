var addUser = function(){

	//http://localhost:8080/hahiti/users/3

	alert("add user");
	$.ajax({
	   	//url: 'http://requestb.in/1n07sbo1',
	   	url:'http://localhost:8080/hahiti/users/3',
	   	method : "POST",
	   	data : '{"Username":"dan","Password":"123","Name":"dan","Email":"d@d","Settings":"MaxLate=5/MaxMissing=3/StatisticsFrequency=3"}',
	   	success: function(data) {
	   		console.log('success',data);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

var getuser1 = function(){
	alert("add user");
	$.ajax({
	   	//url: 'http://requestb.in/1n07sbo1',
	   	url:'http://localhost:8080/hahiti/users/3',
	   	method : "GET",
		dataType: "jsonp", 
	   	success: function(data) {
	   		console.log('success',data);
	   		alert(data);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};

