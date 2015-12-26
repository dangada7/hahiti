using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Web;

namespace REST_API
{
    [ServiceContract]    
    public interface ServiceContract
    {
        [WebInvoke(Method = "PUT", UriTemplate = "users/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        String AddUser(string id);

        [WebInvoke(Method = "GET", UriTemplate = "users/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string GetUser(string id);

        [WebInvoke(Method = "DELETE", UriTemplate = "users/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string RemoveUser(string id);   
    }
}