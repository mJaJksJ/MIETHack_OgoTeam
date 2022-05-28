using Ogo.Controllers.StudentController;
using Ogo.Data;
using System.Collections.Generic;
using System.Linq;

namespace Ogo.Services.StudentService
{
    public class StudentService
    {
        private readonly DatabaseContext _db;
        public StudentService(DatabaseContext db)
        {
            _db = db;
        }
        public IEnumerable<StudentResponse> GetStudentsInfo()
        {
            IEnumerable<StudentResponse> students = _db.Students.Select(s => new StudentResponse
            {
                Id = s.Id,
                Number = s.Number,
                FullName = s.FullName,
                GroupName = s.GroupName,
                NumberOfRoom = s.Room.Number
                
            });
            return students;
        }
    }
}
