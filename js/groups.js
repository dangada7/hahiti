$(document).ready(function(){
 
  var i=1;

  var addGroup = function(groupName, groupNotes){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td class="groupName'+i+'" >' + groupName + '</td>' + 
                        '<td>' + groupNotes + '</td>' +
                        '<td> <a href="#" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></a>' +
                             '<a href="#" class="btn btn-primary"> <span class="glyphicon glyphicon-pencil"></span></a>' +
                             '<a href="' + 'group.html?'+'groupName='+groupName+'&groupNote='+ groupNotes +'" class="btn btn-default"> <span class="glyphicon glyphicon-eye-open"></span></a> </td>' );

      $('#tab_logic').append('<tr id="addr'+(i+1)+'" class="text-center"></tr>');
      i++; 
    };


  //add groups that exists
  var Groups = [["group1","note1"],["group2","note2"],["group3","note3"]];

  var j;
  for (j = 0; j < Groups.length; j++) {
     addGroup(Groups[j][0],Groups[j][1]);
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