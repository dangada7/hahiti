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
        public String AddUser(string data)
        {
            JavaScriptSerializer json_serializer = new JavaScriptSerializer();
            //Dictionary<string, string> userData = json_serializer.Deserialize<Dictionary<string, string>>(data);

            try
            {
                User newUser = json_serializer.Deserialize<User>(data);
                if (!users.Keys.Contains(newUser.Id))
                {
                    users.Add(newUser.Id, newUser);
                    return "Added new user: " + newUser.Name;
                }
                return "User with id " + newUser.Id + " already exists.";
            }
            catch
            {
                return "ERROR - Invalid JSON format.";
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
                return "User not found!";
            }
            catch
            {
                return "ERROR - Invalid Id.";
            }                        
        }

        public string RemoveUser(string id)
        {
            try
            {
                if (users.Keys.Contains(id))
                {
                    users.Remove(id);
                    return "User " + users[id].Name + "removed!";
                }
                return "User not found!";
            }
            catch
            {
                return "ERROR - Invalid Id.";
            }
        }
    }
}