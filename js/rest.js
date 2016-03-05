var addUser = function(){
	alert("add user");
	$.ajax({
	   	url: 'http://requestb.in/1n07sbo1',
	   	method : "PUT",
	   	data : '{"Username":"dan","Password":"123","Name":"dan","Email":"d@d","Settings":"MaxLate=5/MaxMissing=3/StatisticsFrequency=3"}',
	   	success: function(data) {
	   		console.log('success',data);
	   	},
	   	error: function (ajaxContext) {
        	alert(ajaxContext.responseText)
  		}
	});
};
