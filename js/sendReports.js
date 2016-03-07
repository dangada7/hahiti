
var refreshTable = function(){
  //just a note
   window.location.replace("group.html");
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
  var addStudentFunc = function(studentId,studentName,studentPhone,studentEmail, present, late, missing ){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td>' + studentId + '</td>' + 
                        '<td>' + studentName + '</td>' +
                        '<td>' + studentPhone + '</td>' +
                        '<td>' + studentEmail + '</td>' +
                        '<td>' + present + '</td>' +
                        '<td>' + late + '</td>' +
                        '<td>' + missing + '</td>' +
                        '<td>' +
					 		'<label class="radio-inline"><input type="radio" name="optradio">Present</label>' + 
					 		'<label class="radio-inline"><input type="radio" name="optradio">Late</label>' + 
					 		'<label class="radio-inline"><input type="radio" name="optradio">Mssing</label>' + 
					 		'<div class="btn-group" data-toggle="buttons">'+
							  '<label class="btn btn-primary active"> <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected) </label>'+
							  '<label class="btn btn-primary"><input type="radio" name="options" id="option2" autocomplete="off"> Radio 2 </label>' +
							  '<label class="btn btn-primary"> <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3  </label>'+
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
         addStudentFunc(students[j].Id, students[j].Name, students[j].Phone, students[j].Email, students[j].Present, students[j].Late, students[j].Missing);
      }
  }
  //insert to the table all students
  if(userName!=null){
    sendGetAllStudentRequest(groupID,addStudentsFunc);
  }
  // add new student
  $("#add_row").click(function(){
    var studentId  = $("#student_id_input").val();
    var studentName  = $("#student_name_input").val();
    var studentPhone  = $("#student_phone_input").val();
    var studentEmail  = $("#student_email_input").val();
    
    $("#student_id_input").val("");
    $("#student_name_input").val("");
    $("#student_phone_input").val("");
    $("#student_email_input").val("");

    sendAddNewStudentRequest(studentId,studentName,studentPhone,studentEmail,groupID, addStudentFunc);
  });
  // logout
  $("#logoutButton").click( function(){
    //note
    sessionStorage.removeItem('username');
  });


  //proxy
  addStudentFunc("bla+","studentName","studentPhone","studentEmail", "present", "late", "missing");


});




