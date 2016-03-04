using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Queue;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
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
        private string getCurrentMessageData()
        {
            byte[] buff = new byte[512];
            System.ServiceModel.OperationContext.Current.RequestContext.RequestMessage.GetBody<Stream>().Read(buff, 0, 512);
            return System.Text.Encoding.Default.GetString(buff).Split('\u0000')[0];
        }
        public string AddUser(string id)
        {                                              
            return CRUD.addData<User>(id, "users");
        }

        public string GetUser(string id)
        {
            return CRUD.getData<User>(id, "users");            
        }

        public string RemoveUser(string id)
        {
            return CRUD.removeData<User>(id, "users");         
        }

        public string AddGroup(string id)
        {
            return CRUD.addData<Group>(id, "groups");
        }

        public string GetGroup(string id)
        {
            return CRUD.getData<Group>(id, "groups");              
        }

        public string RemoveGroup(string id)
        {
            return CRUD.removeData<Group>(id, "groups");         
        }

        public string AddReport(string id)
        {
            // initialize the account information
            CloudStorageAccount storageAccount =
            CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
            // retrieve a reference to the messages queue
            var queueClient = storageAccount.CreateCloudQueueClient();
            var queue = queueClient.GetQueueReference("analysis");
            queue.CreateIfNotExists(null);
            var msg = new CloudQueueMessage(id);
            queue.AddMessage(msg);
            return CRUD.addData<Report>(id, "reports");

        }

        public string GetReport(string id)
        {
            return CRUD.getData<Report>(id, "reports");    
        }
        
        public string RemoveReport(string id)
        {
            return CRUD.removeData<Report>(id, "reports");        
        }
        
        public string AddStatistic(string id)
        {
            return CRUD.addData<Statistic>(id, "statistics");
        }
        
        public string GetStatistic(string id)
        {
            return CRUD.getData<Statistic>(id, "statistics");
        }
        
        public string RemoveStatistic(string id)
        {
            return CRUD.removeData<Statistic>(id, "statistics");
        }

        public string AddStudent(string id)
        {
            return CRUD.addData<Student>(id, "students");
        }

        public string GetStudent(string id)
        {
            return CRUD.getData<Student>(id, "students");
        }

        public string RemoveStudent(string id)
        {
            return CRUD.removeData<Student>(id, "students");
        }
    }

    public class CRUD
    {
        private static string getCurrentMessageData()
        {
            byte[] buff = new byte[512];
            System.ServiceModel.OperationContext.Current.RequestContext.RequestMessage.GetBody<Stream>().Read(buff, 0, 512);
            return System.Text.Encoding.Default.GetString(buff).Split('\u0000')[0];
        }
        public static string addData<T>(string id, string category) where T : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
        {            
            try
            {
                JavaScriptSerializer json_serializer = new JavaScriptSerializer();
                T data = json_serializer.Deserialize<T>(getCurrentMessageData());


                string[] properties = new string[typeof(T).GetProperties().Length];
                properties[0] = id;
                int i = 1;
                foreach (PropertyInfo propertyInfo in typeof(T).GetProperties())
                {
                    if (propertyInfo.CanRead)
                    {
                        object value = propertyInfo.GetValue(data, null);
                        if (value != null)
                        {
                            properties[i] = value.ToString();
                        }
                        else
                        {
                            i -= 1;
                        }
                    }
                    i += 1;
                }

                T newData = (T)Activator.CreateInstance(typeof(T), properties);

                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                // Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                // Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference(category);
                // Build insert operation.
                TableOperation insertOperation = TableOperation.Insert(newData);
                // Execute the insert operation.
                table.Execute(insertOperation);
                return "Added new " + category.Substring(0, category.Length - 1) + ": " + newData.Id;
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return new ServiceError().throwError(e);
            }
        }

        public static string getData<T>(string id, string category) where T : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
        {
            try
            {
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                //Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                //Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference(category);
                TableOperation getOp = TableOperation.Retrieve<T>(category.Substring(0,category.Length - 1).ToUpper(), id);
                T data = (T)table.Execute(getOp).Result;
                if (data != null)
                {
                    return new JavaScriptSerializer().Serialize(data);
                }
                else
                {
                    WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    return category.Substring(0, category.Length - 1) + " not found!";
                }
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return new ServiceError().throwError(e);
            }    
        }

        public static string removeData<T>(string id, string category) where T : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
        {
            try
            {
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
                //Create the table client.
                CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
                //Create the table if it doesn't exist.
                CloudTable table = tableClient.GetTableReference(category);
                TableOperation retrieveOperation = TableOperation.Retrieve<T>(category.Substring(0, category.Length - 1).ToUpper(), id);
                TableResult retrieveResult = table.Execute(retrieveOperation);
                T dataToDelete = (T)retrieveResult.Result;
                if (dataToDelete != null)
                {
                    TableOperation deleteOperation = TableOperation.Delete(dataToDelete);
                    table.Execute(deleteOperation);
                    return category.Substring(0, category.Length - 1) + " " + id + " was deleted!";
                }
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return category.Substring(0, category.Length - 1) + " not found!";
            }
            catch (Exception e)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = System.Net.HttpStatusCode.BadRequest;
                return new ServiceError().throwError(e);
            }
        }


    }
}