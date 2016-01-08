using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Diagnostics;
using Microsoft.WindowsAzure.ServiceRuntime;
using System.ServiceModel;
using System.Diagnostics;
using System.ServiceModel.Web;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace REST_API
{
    public class WebRole : RoleEntryPoint
    {
        public override bool OnStart()
        {
            WebServiceHost host = new WebServiceHost(typeof(HahitiService), new Uri("http://localhost:8080/hahiti"));
            host.Open();

            CloudStorageAccount storageAccount =
            CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
            // Create the table client.
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
            // Create the table if it doesn't exist.
            CloudTable usersTable = tableClient.GetTableReference("users");
            usersTable.CreateIfNotExists();
            CloudTable groupsTable = tableClient.GetTableReference("groups");
            groupsTable.CreateIfNotExists();

            return base.OnStart();
        }
    }
}
