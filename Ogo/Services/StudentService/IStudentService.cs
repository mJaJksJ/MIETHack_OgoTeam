using Ogo.Controllers.StudentController;
using System.Collections.Generic;

namespace Ogo.Services.StudentService
{
    public interface IStudentService
    {
        public List<StudentShortResponse> GetStudentsInfo();
        public StudentFullResponse GetStudent(int? id);
        public IEnumerable<StudentShortResponse> GetStudentsWithoutRoom();
        public bool AddStudentToDB(StudentFullRequest student);
        public bool UpdateRoom(int? studentNumber, int? roomNumber, int? housingNumber);

        public bool RemoveRoom(int? studentNumber);

        public bool RemoveStudent(int? studentNumber);
    }
}
