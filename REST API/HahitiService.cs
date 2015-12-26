using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;

namespace REST_API
{
    [ServiceBehavior(InstanceContextMode = InstanceContextMode.Single)]
    public class HahitiService : ServiceContract
    {
        Dictionary<String, User> users = new Dictionary<String, User>();
        Dictionary<String, Group> groups = new Dictionary<String, Group>();
        public string AddUser(string data)
        {
            try
            {
                JavaScriptSerializer json_serializer = new JavaScriptSerializer();
                User newUser = json_serializer.Deserialize<User>(data);
                if (!users.Keys.Contains(newUser.Id))
                {
                    users.Add(newUser.Id, newUser);
                    return "Added new user: " + newUser.Name;
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "User with id " + newUser.Id + " already exists.";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message;
            }
        }

        public string GetUser(string id)
        {
            try
            {
                if (users.Keys.Contains(id))
                {
                    User user = users[id];
                    return new JavaScriptSerializer().Serialize(user);
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "User not found!";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message + " (" + id + ")";
            }                        
        }

        public string RemoveUser(string id)
        {
            try
            {
                if (users.Keys.Contains(id))
                {
                    string name = users[id].Name;
                    users.Remove(id);
                    return "User " + name + " removed!";
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "User not found!";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message + " (" + id + ")";
            }
        }

        public string AddGroup(string data)
        {
            JavaScriptSerializer json_serializer = new JavaScriptSerializer();

            try
            {
                Group newGroup = json_serializer.Deserialize<Group>(data);
                if (!groups.Keys.Contains(newGroup.Id))
                {
                    groups.Add(newGroup.Id, newGroup);
                    return "Added new group: " + newGroup.Name;
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "Group with id " + newGroup.Id + " already exists.";
            }
            catch (Exception e)
            {                
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message;
            }
        }

        public string GetGroup(string id)
        {
            try
            {
                if (groups.Keys.Contains(id))
                {
                    Group group = groups[id];
                    return new JavaScriptSerializer().Serialize(group);
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "Group not found!";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message + " (" + id + ")";
            }         
        }

        public string RemoveGroup(string id)
        {
            try
            {
                if (groups.Keys.Contains(id))
                {
                    string name = groups[id].Name;
                    groups.Remove(id);
                    return "Group " + name + " removed!";
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "Group not found!";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message + " (" + id + ")";
            }
        }
    }
}