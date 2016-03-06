 
 var goToGroupPage = function(groupName,groupNotes,groupID){
    sessionStorage.setItem("groupName",groupName);
    sessionStorage.setItem("groupNotes",groupNotes);
    sessionStorage.setItem("groupID",groupID);
    window.location.replace("group.html");
}

$(document).ready(function(){
 
  var i=1;

  var addGroup = function(groupName, groupNotes, groupID){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td class="groupName'+i+'" >' + groupName + '</td>' + 
                        '<td>' + groupNotes + '</td>' +
                        '<td> <a href="#" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></a>' +
                             '<a href="#" class="btn btn-primary"> <span class="glyphicon glyphicon-pencil"></span></a>' +
                             '<a onclick="goToGroupPage(\''+groupName+'\',\''+groupNotes+'\',\''+groupID+'\')" class="btn btn-default"> <span class="glyphicon glyphicon-eye-open"></span></a> </td>' );

      $('#tab_logic').append('<tr id="addr'+(i+1)+'" class="text-center"></tr>');
      i++; 
    };

  var data = sessionStorage.getItem("data");
 
  var groups = jQuery.parseJSON(data);

  if(groups!=null)
    for (j = 0; j < groups.length; j++) {
       addGroup(groups[j].Name,groups[j].Description,groups[j].Id);
    }


  // add functionality to buttons
  $("#add_row").click(function(){
    var groupName =$("#group_input").val();
    var groupNotes =$("#note_input").val();
    addGroup(groupName,groupNotes)
  });

  $("#delete_row").click(function(){
    if(i>1){
		  $("#addr"+(i-1)).html('');
		  i--;
		}
	});

 

});