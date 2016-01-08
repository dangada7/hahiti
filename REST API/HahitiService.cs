using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.ServiceModel;
using System.ServiceModel.Channels;
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

        private string getCurrentMessageData()
        {
            byte[] buff = new byte[512];
            System.ServiceModel.OperationContext.Current.RequestContext.RequestMessage.GetBody<Stream>().Read(buff, 0, 512);
            return System.Text.Encoding.Default.GetString(buff).Split('\u0000')[0];
        }
        public string AddUser(string id)
        {                                  
            try
            {
                JavaScriptSerializer json_serializer = new JavaScriptSerializer();
                User userData = json_serializer.Deserialize<User>(getCurrentMessageData());
                User newUser = new User(id, userData.Username, userData.Name, userData.Email);   
             
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                // Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                // Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference("users");
                // Build insert operation.
                TableOperation insertOperation = TableOperation.Insert(newUser);
                // Execute the insert operation.
                table.Execute(insertOperation);
                return "Added new user: " + newUser.Name;                
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
                    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                    //Create the table client.
                    CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                    //Create the table if it doesn't exist.
                    CloudTable table = tableClient.GetTableReference("users");                    
                    TableOperation getOp = TableOperation.Retrieve<User>("USER", id);
                    User user = (User)table.Execute(getOp).Result;                    
                    return new JavaScriptSerializer().Serialize(user);                
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message;
            }                        
        }

        public string RemoveUser(string id)
        {
            try
            {
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                //Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                //Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference("users");
                TableOperation retrieveOperation = TableOperation.Retrieve<User>("USER", id);
                TableResult retrieveResult = table.Execute(retrieveOperation);
                User userToDelete = (User)retrieveResult.Result;
                if (userToDelete != null)
                {
                    TableOperation deleteOperation = TableOperation.Delete(userToDelete);
                    table.Execute(deleteOperation);
                    return "User " + id + " was deleted!";
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "User not found!";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message;
            }
        }

        public string AddGroup(string id)
        {
            try
            {
                JavaScriptSerializer json_serializer = new JavaScriptSerializer();
                Group groupData = json_serializer.Deserialize<Group>(getCurrentMessageData());
                Group newGroup = new Group(id, groupData.Name, groupData.Description);     
                newGroup.Id = id;
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                // Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                // Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference("groups");
                // Build insert operation.
                TableOperation insertOperation = TableOperation.Insert(newGroup);
                // Execute the insert operation.
                table.Execute(insertOperation);
                return "Added new group: " + newGroup.Name;
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
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                //Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                //Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference("groups");
                TableOperation getOp = TableOperation.Retrieve<Group>("GROUP", id);
                Group group = (Group)table.Execute(getOp).Result;
                return new JavaScriptSerializer().Serialize(group);
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message;
            }                           
        }

        public string RemoveGroup(string id)
        {
            try
            {
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                //Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                //Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference("groups");
                TableOperation retrieveOperation = TableOperation.Retrieve<Group>("GROUP", id);
                TableResult retrieveResult = table.Execute(retrieveOperation);
                Group groupToDelete = (Group)retrieveResult.Result;
                if (groupToDelete != null)
                {
                    TableOperation deleteOperation = TableOperation.Delete(groupToDelete);
                    table.Execute(deleteOperation);
                    return "Group " + id + " was deleted!";
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "Group not found!";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return "ERROR - " + e.Message;
            }
        }
    }
}