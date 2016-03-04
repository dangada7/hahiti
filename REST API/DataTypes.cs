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

        public Group(string id, string name, string description, string imageURL)
        {
            PartitionKey = "GROUP";
            RowKey = id;
            Id = id;
            this.Name = name;
            this.Description = description;
            this.ImageURL = imageURL;
        }

        public Group(params string[] list)
        {
            PartitionKey = "GROUP";
            RowKey = list[0];
            Id = list[0];
            this.Name = list[1];
            this.Description = list[2];
            this.ImageURL = list[3];
        }


        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }

    }

    [DataContract]
    public class Report : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
    {
        public Report()
        {

        }      
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

    [DataContract]
    public class Statistic : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
    {
        public Statistic()
        {

        }        
        public Statistic(string id, string issueDate, string reportsDateFrom, string reportsDateTo, string studentsPresent, string studentsLate, string studentsMissing)
        {
            PartitionKey = "STATISTIC";
            RowKey = id;
            this.Id = id;
            this.IssueDate = issueDate;
            this.ReportsDateFrom = reportsDateFrom;
            this.ReportsDateTo = reportsDateTo;
            this.StudentsPresent = studentsPresent;
            this.StudentsLate = studentsLate;
            this.StudentsMissing = studentsMissing;
        }

        public Statistic(params string[] list)
        {
            PartitionKey = "STATISTIC";
            RowKey = list[0];
            this.Id = list[0];
            this.IssueDate = list[1];
            this.ReportsDateFrom = list[2];
            this.ReportsDateTo = list[3];
            this.StudentsPresent = list[4];
            this.StudentsLate = list[5];
            this.StudentsMissing = list[6];
        }

        public string Id { get; set; }
        public string IssueDate { get; set; }
        public string ReportsDateFrom { get; set; }
        public string ReportsDateTo { get; set; }
        public string StudentsPresent { get; set; }
        public string StudentsLate { get; set; }
        public string StudentsMissing { get; set; }
    }

    [DataContract]
    public class Student : Microsoft.WindowsAzure.Storage.Table.TableEntity, IdentifiableObject
    {
        public Student()
        {
        }
        public Student(string id, string name, string phone, string email, string imageURL)
        {
            PartitionKey = "STUDENT";
            RowKey = id;
            this.Id = id;
            this.Name = name;
            this.Phone = phone;
            this.Email = email;
            this.ImageURL = imageURL;
        }

        public Student(params string[] list)
        {
            PartitionKey = "STUDENT";
            RowKey = list[0];
            this.Id = list[0];
            this.Name = list[1];
            this.Phone = list[2];
            this.Email = list[3];
            this.ImageURL = list[4];
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string ImageURL { get; set; }
    }
}
