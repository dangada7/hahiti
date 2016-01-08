using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace REST_API
{
    [DataContract]
    public class User : Microsoft.WindowsAzure.Storage.Table.TableEntity
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

        public string Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    [DataContract]
    public class Group : Microsoft.WindowsAzure.Storage.Table.TableEntity
    {
        public Group()
        {
    
        }

        public Group(string id, string name, string description)
        {
            PartitionKey = "GROUP";
            RowKey = id;
            this.Name = name;
            this.Description = description;
        }


        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

    }

}
