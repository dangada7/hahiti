 
 var goToGroupPage = function(groupName,groupNotes,groupID){
    sessionStorage.setItem("groupName",groupName);
    sessionStorage.setItem("groupNotes",groupNotes);
    sessionStorage.setItem("groupID",groupID);
    window.location.replace("group.html");
};


var refreshTable = function(){
   window.location.replace("groups.html");
};


var deleteGroup = function(groupId){
   var userName = sessionStorage.getItem('username');
   sendDeleteGroupRequest(groupId,userName,refreshTable);
}



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

  var addGroupFunc = function(groupName, groupNotes, groupID){
     $('#addr'+i).html( '<td>'+ i  + '</td>' + 
                        '<td class="groupName'+i+'" >' + groupName + '</td>' + 
                        '<td>' + groupNotes + '</td>' +
                        '<td> <a onclick="deleteGroup(\''+groupID+'\')" class="btn btn-danger"> <span class="glyphicon glyphicon-trash"></span></a>' +
                              '<a href="#" class="btn btn-primary"> <span class="glyphicon glyphicon-pencil"></span></a>' +
                              '<a onclick="goToGroupPage(\''+groupName+'\',\''+groupNotes+'\',\''+groupID+'\')" class="btn btn-default"> <span class="glyphicon glyphicon-eye-open"></span></a> </td>' );

      $('#tab_logic').append('<tr id="addr'+ i +'" class="text-center"></tr>');
      i++; 
    };


  var addGroupsFunc = function(data){
     //set all the groups
      var groups = jQuery.parseJSON(data);
      if(groups!=null){
        for (j = 0; j < groups.length; j++) {
           addGroupFunc(groups[j].Name,groups[j].Description,groups[j].Id);
        }
      }
  };
  

  if(userName!=null){
    sendGetAllGroupsRequest(userName, addGroupsFunc);
  }
 

  //addGroupFunc("groupname","groupNotes","groupid");


  // try to add new group
  $("#add_row").click(function(){
    var groupName  = $("#group_input").val();
    var groupNotes = $("#note_input").val();
    $("#group_input").val("");
    $("#note_input").val("");

    sendAddGroupRequest(groupName,groupNotes,userName, addGroupFunc);
  });

  $("#delete_row").click(function(){
    if(i>1){
		  $("#addr"+(i-1)).html('');
		  i--;
		}
	});

 

});