using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace REST_API
{
    public interface IdentifiableObject
    {
        string Id { get; set; }
    }

    [DataContract]
    public class User : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
    {
        public User()
        {            
        }
        public User(string id, string username, string name, string email)
           
        {
            PartitionKey = "USER";
            RowKey = id;
            this.Id = id;
            this.Username = username;
            this.Name = name;
            this.Email = email;
        }

        public User(params string[] list)
        {
            PartitionKey = "USER";
            RowKey = list[0];
            this.Id = list[0];
            this.Username = list[1];
            this.Name = list[2];
            this.Email = list[3];
        }

        public string Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    [DataContract]
    public class Group : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
    {
        public Group()
        {
    
        }

        public Group(string id, string name, string description)
        {
            PartitionKey = "GROUP";
            RowKey = id;
            Id = id;
            this.Name = name;
            this.Description = description;
        }

        public Group(params string[] list)
        {
            PartitionKey = "GROUP";
            RowKey = list[0];
            Id = list[0];
            this.Name = list[1];
            this.Description = list[2];
        }


        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

    }

    [DataContract]
    public class Report : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
    {
        public Report()
        {

        }

        // Tuple is (studentID, status, notes)
        public Report(string id, string date, string groupId, string summary)
        {
            PartitionKey = "REPORT";
            RowKey = id;
            this.Id = id;
            this.Date = date;
            this.GroupId = groupId;
            this.ParticipationSummary = summary;
        }

        public Report(params string[] list)
        {
            PartitionKey = "REPORT";
            RowKey = list[0];
            this.Id = list[0];
            this.Date = list[1];
            this.GroupId = list[2];
            this.ParticipationSummary = list[3];
        }


        public string Id { get; set; }
        public string Date { get; set; }
        public string GroupId { get; set; }
        public string ParticipationSummary { get; set; }

    }
}
