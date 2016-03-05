var addUser = function(){

	//http://localhost:8080/hahiti/users/3

	alert("add user");
	$.ajax({
	   	url: 'http://requestb.in/1n07sbo1',
	   	method : "PUT",
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
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};
