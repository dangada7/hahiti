

var addUser = function(){
	alert("add user");
	$.ajax({
		type: 'PUT',
	   	url: 'http://requestb.in/1mt9rms1?inspect',
	   	data: {
      		format: 'json',
      		Username: 'dan',
      		Password: '123',
      		Name: 'Dan',
      		Email: 's@s',
      		Settings: 'MaxLate=2/MaxMissing=2'
   		},
   		dataType: 'jsonp',
	   	success: function(data) {
	   		console.log('success',data);
	   	}
	});
};

