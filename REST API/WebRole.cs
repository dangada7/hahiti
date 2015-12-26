using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Diagnostics;
using Microsoft.WindowsAzure.ServiceRuntime;
using System.ServiceModel;
using System.Diagnostics;
using System.ServiceModel.Web;

namespace REST_API
{
    public class WebRole : RoleEntryPoint
    {
        public override bool OnStart()
        {
            WebServiceHost host = new WebServiceHost(typeof(HahitiService),
            new Uri("http://localhost:8080/hahiti"));
            host.Open();

            return base.OnStart();
        }
    }
}
