using Microsoft.AspNetCore.Mvc;
using Ogo.Data;
using Ogo.Services.StudentService;
using System.Collections.Generic;


namespace Ogo.Controllers.StudentController
{
    public class StudentController:Controller
    {
        private readonly DatabaseContext _db;
        private readonly IStudentService _studentService;
        public StudentController(DatabaseContext db, IStudentService studentService)
        {
            _db = db;
            _studentService = studentService;
        }

        [HttpGet]
        [Route("/api/GetStudentsShort/")]
        [ProducesResponseType(typeof(List<StudentShortResponse>), 200)]
        public IActionResult GetStudentsShort()
        {
            List<StudentShortResponse> students = _studentService.GetStudentsInfo();
            return Ok(students);
        }

        [HttpGet]
        [Route("/api/GetStudentInfo/")]
        [ProducesResponseType(typeof(StudentFullResponse), 200)]
        public IActionResult GetStudentInfo(int? id)
        {
            return Ok(_studentService.GetStudent(id));
        }

        [HttpGet]
        [Route("/api/GetStudentWithoutRoom/")]
        [ProducesResponseType(typeof(IEnumerable<StudentShortResponse>), 200)]
        public IActionResult GetStudentWithoutRoom()
        {
            return Ok(_studentService.GetStudentsWithoutRoom());
        }

        [HttpPost]
        [Route("/api/AddStudent/")]
        public IActionResult AddStudent(StudentFullRequest student)
        {
            if(_studentService.AddStudentToDB(student))
            {
                return Ok();
              
            }
            else
            {
                return new BadRequestResult();
            }
        }
    }
}
