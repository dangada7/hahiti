
var refreshFunc = function(){
  //just a note
   window.location.replace("reports.html");
 };

var deleteStudent = function(studentId){
  var groupID   = sessionStorage.getItem("groupID");
  sendDeleteStudentRequest(studentId, groupID, refreshTable);
}

var editStudent = function(groupName, groupNotes, groupID){
  $("#editGroup").show();
 //$("#editGroupHeading").html("Edit Group-" + groupName + ", Group Notes-"+ groupNotes); 
}


//document ready
$(document).ready(function(){
 
  //get user name
  var userName = sessionStorage.getItem('username');
  //set navigation bar
  var setNavigationBar = function(){
     if(userName==null ||userName=="logout"){
        $("#logoutButton").hide();
      }else{
        $("#loginButton").hide();
        $("#signupButton").hide();
        $("#userName").html(userName);
      }
  };
  setNavigationBar();

  // 
  var groupName = sessionStorage.getItem("groupName");
  var GroupNotes = sessionStorage.getItem("groupNotes");
  var groupID   = sessionStorage.getItem("groupID");
  var i=1;
  $("#titleText").html(groupName);
  $("#note").html(GroupNotes);
  //add one student
  var addStudentFunc = function(studentId,studentName,studentPhone,studentEmail){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td>' + studentId + '</td>' + 
                        '<td>' + studentName + '</td>' +
                        '<td>' + studentPhone + '</td>' +
                        '<td>' + studentEmail + '</td>' +
                        '<td>' +
					 		'<div class="btn-group" data-toggle="buttons">'+
							  '<label class="btn btn-success active"> <input type="radio" name="options" id="Present'+i+'" autocomplete="off" checked> Present <span class="glyphicon glyphicon-ok"></span> </label>'+
							  '<label class="btn btn-warning">        <input type="radio" name="options" id="Late'+i+'" autocomplete="off"> Late <span class="glyphicon glyphicon-ok"></span> </label>' +
							  '<label class="btn btn-danger">         <input type="radio" name="options" id="Missing'+i+'" autocomplete="off"> Missing  <span class="glyphicon glyphicon-ok"></span> </label>'+
							'</div>'+
                        '</td>'
                        );

      $('#tab_logic').append('<tr id="addr'+(i+1)+'" class="text-center"></tr>');
      i++; 
  };

  //add all the students in data (json) 
  var addStudentsFunc = function(data){
      var students = jQuery.parseJSON(data);
      var j;

      for (j = 0; j < students.length; j++) {
         addStudentFunc(students[j].Id, students[j].Name, students[j].Phone, students[j].Email);
      }
  }
  //insert to the table all students
  if(userName!=null){
    sendGetAllStudentRequest(groupID,addStudentsFunc);
  }

  // logout
  $("#logoutButton").click( function(){
    //note
    sessionStorage.removeItem('username');
  });


  // logout
  $("#send_report").click( function(){
    

    sendAddNewReportRequest(userName, groupID, groupName, "Summary", refreshFunc);

  });


  //proxy
  addStudentFunc("bla+","studentName","studentPhone","studentEmail");
    //proxy
  addStudentFunc("bla+","studentName","studentPhone","studentEmail");





});




