using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Diagnostics;
using Microsoft.WindowsAzure.ServiceRuntime;
using Microsoft.WindowsAzure.Storage;
using REST_API;
using System.Web.Script.Serialization;


namespace Report_Analyzer
{
    public class WorkerRole : RoleEntryPoint
    {
        private readonly CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        private readonly ManualResetEvent runCompleteEvent = new ManualResetEvent(false);

        public override void Run()
        {
            // initialize the account information
            CloudStorageAccount storageAccount =
            CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("DataConnectionString"));
            // retrieve a reference to the messages queue
            var queueClient = storageAccount.CreateCloudQueueClient();
            var queue = queueClient.GetQueueReference("analysis");
            // retrieve messages and write them to the development fabric log
            while (true)
            { 
                Thread.Sleep(3000);
                if (queue.Exists())
                {
                    var id = queue.GetMessage();
                    if (id != null)
                    { 
                        Trace.TraceInformation(string.Format("Processing report (id = {0}).", id.AsString));
                         queue.DeleteMessage(id);

                         JavaScriptSerializer serializer = new JavaScriptSerializer();

                         Report report = serializer.Deserialize<Report>(CRUD.getData<Report>(id.AsString, "reports"));
                         string groupId = report.GroupId;
                         string submitter = report.Submitter;
                         User user = serializer.Deserialize<User>(CRUD.getData<User>(submitter, "users"));
                         Group group = serializer.Deserialize<Group>(CRUD.getData<Group>(groupId, "groups"));

                         Summary summary = new Summary(report.Summary);
                         Settings settings = new Settings(user.Settings);

                         string[] students = group.Students.Split(',');

                         foreach (string student in students)
                         {
                             Student currentStudent = serializer.Deserialize<Student>(CRUD.getData<Student>(student, "students"));
                             foreach (Tuple<string, string, string> entry in summary.entries)
                             {
                                 if (entry.Item1.Equals(student))
                                 {
                                     switch (int.Parse(entry.Item2))
                                     {
                                         case 0:
                                             {
                                                 currentStudent.Present = (int.Parse(currentStudent.Present) + 1).ToString();
                                                 // TODO - Update the field in the table!
                                                 break;
                                             }
                                         case 1:
                                             {
                                                 currentStudent.Late = (int.Parse(currentStudent.Late) + 1).ToString();
                                                 // TODO - Update the field in the table!
                                                 break;
                                             }
                                         case 2:
                                             {
                                                 currentStudent.Missing = (int.Parse(currentStudent.Missing) + 1).ToString();
                                                 // TODO - Update the field in the table!
                                                 break;
                                             }
                                         default:
                                             {
                                                 throw new InvalidOperationException("Invalid status");
                                             }
                                     }
                                 }

                                 foreach (string setting in settings.entries.Keys){
                                     if (setting.Equals("MaxLate")){
                                         if (int.Parse(currentStudent.Late) > int.Parse(settings.entries[setting]));
                                     }
                                     if (setting.Equals("MaxMissing")){
                                         if (int.Parse(currentStudent.Missing) > int.Parse(settings.entries[setting]));
                                     }
                                 }

                             }
                         }
                    }
                }
            }
        }
        public override bool OnStart()
        {
            // Set the maximum number of concurrent connections
            ServicePointManager.DefaultConnectionLimit = 12;

            // For information on handling configuration changes
            // see the MSDN topic at http://go.microsoft.com/fwlink/?LinkId=166357.

            bool result = base.OnStart();

            Trace.TraceInformation("Report Analyzer has been started");

            return result;
        }

        public override void OnStop()
        {
            Trace.TraceInformation("Report Analyzer is stopping");

            this.cancellationTokenSource.Cancel();
            this.runCompleteEvent.WaitOne();

            base.OnStop();

            Trace.TraceInformation("Report Analyzer has stopped");
        }

        private async Task RunAsync(CancellationToken cancellationToken)
        {
            // TODO: Replace the following with your own logic.
            while (!cancellationToken.IsCancellationRequested)
            {
                // Read from analysis queue
                // Analyze report
            }
        }

        private void AnalyzeReport(string data){
            // Do some work
        }
    }
}
