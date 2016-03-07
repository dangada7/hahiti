$(document).ready(function(){
  
  var userName = sessionStorage.getItem('username');

  if(userName==null ||userName=="logout"){
    $("#logoutButton").hide();
  }else{
    $("#loginButton").hide();
    $("#signupButton").hide();
    $("#userName").html(userName);
  }
  
  $("#logoutButton").click( function(){
    sessionStorage.removeItem('username');
  });


  var i=1;


   var addReportFunc = function(date, Submitter, GroupId, Summary){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td>' + date + '</td>' + 
                        '<td>' + Submitter + '</td>' + 
                        '<td>' + GroupId + '</td>' +
                        '<td>' + Summary + '</td>' +

                        '<td>  <a class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></a>' +
                              '<a class="btn btn-primary"> <span class="glyphicon glyphicon-pencil"></span></a>'
                        );

      $('#tab_logic').append('<tr id="addr'+ (i+1) +'" class="text-center"></tr>');
      i++; 
    };

 


  //addReportFunc("date", "Submitter", "GroupId", "Summary");

  var addReportsFunc = function(data){
     //set all the groups
      var reports = jQuery.parseJSON(data);
      if(reports!=null){
        for (j = 0; j < reports.length; j++) {
          //Date, Submitter, GroupId, Summary
          //summary = SudentId, Status, Comment, 
           addReportFunc(reports[j].Date, reports[j].Submitter, reports[j].GroupId, reports[j].Summary);  
        }
      }
  };


  if(userName!=null){
    sendGetAllReportRequest(userName, addReportsFunc);
  }



 $("#add_row").click(function(){
     
  });




  $("#delete_row").click(function(){
    if(i>1){
		  $("#addr"+(i-1)).html('');
		  i--;
		}
	});

});