$(document).ready(function(){

  alert("ble")
  var i=1;

  $("#add_row").click(function(){
      $('#addr'+i).html("<td>"+ i  + '</td> <td class="groupName'+i+'" >' + $("#group_input").val() + "</td><td>" + $("#note_input").val() + "</td>" + '<td> <a href="#" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></a> <a href="#" class="btn btn-primary"> <span class="glyphicon glyphicon-pencil"></span></a> <a href="'+ $('#bla').text() + '" class="btn btn-default"> <span class="glyphicon glyphicon-eye-open"></span></a> </td>' );
      $('#tab_logic').append('<tr id="addr'+(i+1)+'" class="text-center"></tr>');
      i++; 
  });

  $("#delete_row").click(function(){
    if(i>1){
		  $("#addr"+(i-1)).html('');
		  i--;
		}

	});

});