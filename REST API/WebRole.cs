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
using Microsoft.WindowsAzure.Storage.Queue;

namespace REST_API
{   
    public class WebRole : RoleEntryPoint
    {
        public override bool OnStart()
        {

            string USERS = "users";
            string GROUPS = "groups";
            string REPORTS = "reports";
            string STATISTICS = "statistics";
            string STUDENTS = "students";
            string ANALYSIS_QUEUE = "analysis";

            WebServiceHost host = new WebServiceHost(typeof(HahitiService), new Uri("http://localhost:8080/hahiti"));
            host.Open();

            CloudStorageAccount storageAccount =
            CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
            // Create the table client.
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
            // Create the table if it doesn't exist.
            CloudTable usersTable = tableClient.GetTableReference(USERS);
            usersTable.CreateIfNotExists();
            CloudTable groupsTable = tableClient.GetTableReference(GROUPS);
            groupsTable.CreateIfNotExists();
            CloudTable reportsTable = tableClient.GetTableReference(REPORTS);
            reportsTable.CreateIfNotExists();
            CloudTable statisticsTable = tableClient.GetTableReference(STATISTICS);
            statisticsTable.CreateIfNotExists();
            CloudTable studentsTable = tableClient.GetTableReference(STUDENTS);
            studentsTable.CreateIfNotExists();

            // Create Queues
            CloudQueueClient queueClient = storageAccount.CreateCloudQueueClient();
            CloudQueue analysisQueue = queueClient.GetQueueReference(ANALYSIS_QUEUE);
            analysisQueue.CreateIfNotExists();


            return base.OnStart();
        }
    }
}
