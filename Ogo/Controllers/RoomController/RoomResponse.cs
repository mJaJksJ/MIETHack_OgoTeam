using Ogo.Controllers.StudentController;
using Ogo.Data.Models;
using System.Collections.Generic;

namespace Ogo.Controllers.RoomController
{
    public class RoomResponse
    {
       
        public int Id { get; set; }
       
        public int Number { get; set; }

        public List<StudentShortResponse> Students { get; set; }
      
        public int Housing { get; set; }
    
        public int CountOfPossibleStudents { get; set; }
    }
}
