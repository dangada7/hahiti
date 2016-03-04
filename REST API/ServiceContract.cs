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
        string AddUser(string id);

        [WebInvoke(Method = "GET", UriTemplate = "users/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string GetUser(string id);

        [WebInvoke(Method = "DELETE", UriTemplate = "users/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string RemoveUser(string id);
        
        [WebInvoke(Method = "PUT", UriTemplate = "groups/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string AddGroup(string id);

        [WebInvoke(Method = "GET", UriTemplate = "groups/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string GetGroup(string id);

        [WebInvoke(Method = "DELETE", UriTemplate = "groups/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string RemoveGroup(string id);

        [WebInvoke(Method = "PUT", UriTemplate = "reports/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string AddReport(string id);

        [WebInvoke(Method = "GET", UriTemplate = "reports/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string GetReport(string id);

        [WebInvoke(Method = "DELETE", UriTemplate = "reports/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string RemoveReport(string id);

        [WebInvoke(Method = "PUT", UriTemplate = "statistics/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string AddStatistic(string id);

        [WebInvoke(Method = "GET", UriTemplate = "statistics/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string GetStatistic(string id);

        [WebInvoke(Method = "DELETE", UriTemplate = "statistics/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string RemoveStatistic(string id);
        [WebInvoke(Method = "PUT", UriTemplate = "students/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string AddStudent(string id);

        [WebInvoke(Method = "GET", UriTemplate = "students/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string GetStudent(string id);

        [WebInvoke(Method = "DELETE", UriTemplate = "students/{id}", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        [OperationContract]
        string RemoveStudent(string id);  
    }
}