using Ogo.Controllers.StudentController;
using System.Collections.Generic;

namespace Ogo.Services.StudentService
{
    public interface IStudentService
    {
        public IEnumerable<StudentShortResponse> GetStudentsInfo();
        public StudentFullResponse GetStudent(int? id);
        public IEnumerable<StudentShortResponse> GetStudentsWithoutRoom();

     
    }
}
