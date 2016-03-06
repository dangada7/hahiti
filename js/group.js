$(document).ready(function(){
 

  var groupName = sessionStorage.getItem("groupName");
  var GroupNotes = sessionStorage.getItem("groupNotes");
  var groupID   = sessionStorage.getItem("groupID");

  var i=1;

  $("#title").html(groupName);
  $("#note").html(GroupNotes);

  //add one student
  var addStudentFunc = function(studentId,studentName,studentPhone,studentEmail, present, late, missing ){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td class="groupName'+i+'" >' + studentId + '</td>' + 
                        '<td>' + studentName + '</td>' +
                        '<td> <a href="#" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></a>' +
                             '<a href="#" class="btn btn-primary"> <span class="glyphicon glyphicon-pencil"></span></a>');

      $('#tab_logic').append('<tr id="addr'+(i+1)+'" class="text-center"></tr>');
      i++; 
  };

  //add all the students in data (json) 
  var addStudentsFunc = function(data){
      var students = jQuery.parseJSON(data);
      var j;
      //Name, Phone, Email, Id
      for (j = 0; j < students.length; j++) {
         addStudentFunc(students[j].Id, students[j].Name, students[j].Phone, students[j].Email, students[j].Present, students[j].Late, students[j].Missing);
      }
  }

  sendGetAllStudentRequest(groupID,addStudentsFunc);

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

  $("#delete_row").click(function(){
    if(i>1){
		  $("#addr"+(i-1)).html('');
		  i--;
		}
	});


});