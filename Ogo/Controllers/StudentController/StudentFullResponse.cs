using System;

namespace Ogo.Controllers.StudentController
{
    public class StudentFullResponse
    {
        
        public int Number { get; set; }

        public string FullName { get; set; }
        
        public string GroupName { get; set; }
       
        public string BirthDay { get; set; }

        public string Image { get; set; }       
        
        public int NumberOfOrderOfHostel { get; set; }
     
        public int NumberOfOrderOfEnrollment { get; set; }
  
        public string DateOfEnrollment { get; set; }
        
        public string PlaceOfBirth { get; set; }

        public int NumberOfRoom { get; set; }
    }
}
