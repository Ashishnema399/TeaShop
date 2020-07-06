using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_API.common
{
    public class StoredProcedureConstants
    {
        public readonly static string GetTeaInfo = "dbo.GetTeaInfo";
        public readonly static string InsertTeaInfo = "dbo.InsertTeaInfo";
        public readonly static string DeleteTeaInfo = "dbo.DeleteTeaInfo";
        public readonly static string UpdateTeaInfo = "dbo.UpdateTeaInfo";
    }
}