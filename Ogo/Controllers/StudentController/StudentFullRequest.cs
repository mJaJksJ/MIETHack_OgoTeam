using Microsoft.AspNetCore.Http;
using System;

namespace Ogo.Controllers.StudentController
{
    public class StudentFullRequest
    {
        
        public int Number { get; set; }

        public string FullName { get; set; }
        
        public string GroupName { get; set; }
       
        public string BirthDay { get; set; }

        public IFormFile Image { get; set; }       
        
        public int NumberOfOrderOfHostel { get; set; }
     
        public int NumberOfOrderOfEnrollment { get; set; }
  
        public string DateOfEnrollment { get; set; }
        
        public string PlaceOfBirth { get; set; }

        public int? NumberOfHousing { get; set; }
        public int? NumberOfRoom { get; set; }

    }
}
