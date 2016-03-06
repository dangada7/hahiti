$(document).ready(function(){
 

  var groupName = sessionStorage.getItem("groupName");
  var GroupNotes = sessionStorage.getItem("groupNotes");
  var groupID   = sessionStorage.getItem("groupID");

  var i=1;

  $("#title").html(groupName);
  $("#note").html(GroupNotes);

  var addGroup = function(groupName, groupNotes){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td class="groupName'+i+'" >' + groupName + '</td>' + 
                        '<td>' + groupNotes + '</td>' +
                        '<td> <a href="#" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></a>' +
                             '<a href="#" class="btn btn-primary"> <span class="glyphicon glyphicon-pencil"></span></a>' +
                             '<a href="' + 'group.html?'+ 'groupName=' + groupName +'" class="btn btn-default"> <span class="glyphicon glyphicon-eye-open"></span></a> </td>' );

      $('#tab_logic').append('<tr id="addr'+(i+1)+'" class="text-center"></tr>');
      i++; 
    };


  //add groups that exists
  var Groups = [["student1","note1"],["student2","note2"]];


  var data = getStudents(groupID);
  var students = jQuery.parseJSON(data);

  alert(students);

  var j;
  //Name, Phone, Email, Id
  for (j = 0; j < students.length; j++) {
     addGroup(students[j].Name,students[j].Phone);
  }


  // add functionality to buttons
  $("#add_row").click(function(){
    var groupName =$("#group_input").val();
    var groupNotes =$("#note_input").val();
    addGroup(groupName,groupNotes);
  });

  $("#delete_row").click(function(){
    if(i>1){
		  $("#addr"+(i-1)).html('');
		  i--;
		}
	});






});