var addUser = function(userName, password, name, email){
	console.log(userName, password, name, email);
	var defualtSetting = "MaxLate=5/MaxMissing=3/StatisticsFrequency=3";

	alert("add user");
	$.ajax({
	  	url:'http://localhost:8080/hahiti/users/3',
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

var getuser1 = function(){
	alert("add user");
	$.ajax({
	   	url: 'http://requestb.in/1n07sbo1',
	   	//url:'http://localhost:8080/hahiti/users/3',
	   	method : "GET",
		dataType: "json", 
	   	success: function(data) {
	   		console.log('success',data);
	   		alert("success" + data);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};


var test = function(){
	// For cross-origin requests, some simple logic
	// to determine if XDomainReqeust is needed.
 	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://requestb.in/1n07sbo1?inspect", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;

}
