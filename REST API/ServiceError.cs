using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace REST_API
{
    class ServiceError : Exception
    {
        public ServiceError(){}

        public string throwError(Exception e){
            return "ERROR - " + e.Message + " in " + e.Source;
        }
    }
}
