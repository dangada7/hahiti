using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace REST_API
{
    [DataContract]
    public class User
    {
        public User()
        {

        }
        public User(string Id, string Username, string Name, string Email)
           
        {
            this.Id = Id;
            this.Username = Username;
            this.Name = Name;
            this.Email = Email;
        }
        public string Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }

    [DataContract]
    public class Group
    {
        public Group()
        {

        }

        public Group(string Id, string Name, string Description)
        {
            this.Id = Id;
            this.Name = Name;
            this.Description = Description;
        }


        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

    }

}
