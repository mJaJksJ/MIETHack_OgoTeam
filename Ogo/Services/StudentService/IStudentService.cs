using Ogo.Controllers.StudentController;
using System.Collections.Generic;

namespace Ogo.Services.StudentService
{
    public interface IStudentService
    {
        public IEnumerable<StudentResponse> GetStudentsInfo();
    }
}
