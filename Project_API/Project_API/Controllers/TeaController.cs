using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Project_API.common;
using Project_API.Models;
using System.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Http.Cors;

namespace Project_API.Controllers
{
    [EnableCors(origins: "*", headers: " * ", methods: "*")]

    public class TeaController : ApiController
    {
        //string con = ConfigurationManager.ConnectionStrings["DBSC"].ConnectionString;
        string con = @"Data Source = LENOVO\SQLEXPRESS; Initial Catalog = TeaShop; Integrated Security = True; MultipleActiveResultSets=True";
        // GET: Tea


        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Tea/GetTeaInfo")]
        public JArray GetTeaInfo()
        {
            List<Object> Data = new List<object>();
            if (con != null)
            {
                try
                {
                    using (SqlConnection sqlCon = new SqlConnection(con))
                    {
                        sqlCon.Open();
                        SqlCommand sqlCmd = new SqlCommand(StoredProcedureConstants.GetTeaInfo, sqlCon);
                        sqlCmd.CommandType = CommandType.StoredProcedure;
                        SqlDataReader rd = sqlCmd.ExecuteReader();
                        while (rd.Read())
                        {
                            Data.Add(new Tea()
                            {
                                Id = Convert.ToInt32(rd["Id"]),
                                Name = rd["Name"].ToString(),
                                Description = rd["Description"].ToString(),
                                Price = rd["Price"].ToString()
                            });
                        }
                        sqlCon.Close();
                    }
                }
                catch (Exception ex)
                {
                    Data.Add("{ \"error \": |" + ex.Message + "\"}");
                }
            }
            else
            {
                Data.Add("{ \"error \": | connection string not available !! \"}");
            }
            return JArray.Parse(JsonConvert.SerializeObject(Data));
        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/Tea/InsertTeaInfo")]

        [EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "POST")]
        public void InsertTeaInfo([FromBody]Tea tObj)
        {
            //List<Object> Data = new List<object>();
            if (tObj != null)
            {
                if (con != null)
                {
                    try
                    {
                        using (SqlConnection sqlCon = new SqlConnection(con))
                        {
                            sqlCon.Open();
                            SqlCommand sqlCmd = new SqlCommand(StoredProcedureConstants.InsertTeaInfo, sqlCon);
                            sqlCmd.CommandType = CommandType.StoredProcedure;
                            sqlCmd.Parameters.AddWithValue("@Name", tObj.Name);
                            sqlCmd.Parameters.AddWithValue("@Description", tObj.Description);
                            sqlCmd.Parameters.AddWithValue("@Price", tObj.Price);
                            sqlCmd.ExecuteNonQuery();
                            sqlCon.Close();
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error Occur while Inserting " + ex.Message);
                    }

                }
                else
                {
                    Console.WriteLine("Working");
                    //return true;
                }
            }
            else
            {
                Console.WriteLine("Object is null");
            }
            // return Ok();
        }

        [System.Web.Http.Route("api/Tea/DeleteTeaById")]
        [System.Web.Http.HttpDelete]
        public int DeleteTeaById(int Id)
        {
            if (con != null)
            {
                try
                {
                    using (SqlConnection sqlCon = new SqlConnection(con))
                    {
                        sqlCon.Open();
                        SqlCommand sqlCmd = new SqlCommand(StoredProcedureConstants.DeleteTeaInfo, sqlCon);
                        sqlCmd.CommandType = CommandType.StoredProcedure;
                        sqlCmd.Parameters.AddWithValue("@Id", Id);
                        sqlCmd.ExecuteNonQuery();
                        sqlCon.Close();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error Occur while Inserting " + ex.Message);
                }

            }
            else
            {
                Console.WriteLine("Working");
                //return true;
            }
            return 0;
        }

        [System.Web.Http.Route("api/Tea/Edit")]
        [System.Web.Http.HttpGet]
        public JArray Edit(int Id)
        {
            List<object> Data = new List<object>();
            if (con != null)
            {
                try
                {
                    using (SqlConnection sqlCon = new SqlConnection(con))
                    {
                        sqlCon.Open();
                        SqlCommand sqlCmd = new SqlCommand("Select * from tbl_Tea where Id =" +Id, sqlCon);
                        sqlCmd.CommandType = CommandType.Text;
                        //int i = Convert.ToInt32(sqlCmd.Parameters.AddWithValue("@Id", Id));
                        //if(i > 0)
                        {
                            SqlDataReader dr = sqlCmd.ExecuteReader();
                            while (dr.Read())
                            {
                                Data.Add(new Tea()
                                {
                                    Id = Convert.ToInt32(dr["Id"]),
                                    Name = dr["Name"].ToString(),
                                    Description = dr["Description"].ToString(),
                                    Price = dr["Price"].ToString()
                                });
                            }
                        }
                        
                        sqlCon.Close();
                    }
                }
                catch (Exception ex)
                {
                    Data.Add("{ \"error \": |" + ex.Message + "\"}");
                }

            }
            else
            {
                Data.Add("{ \"error \": | connection string not available !! \"}");
            }

            return JArray.Parse(JsonConvert.SerializeObject(Data));
        }

    }
}
