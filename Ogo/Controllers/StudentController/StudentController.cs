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
        [Route("/api/GetStudents/")]
        public IActionResult GetStudents()
        {
            IEnumerable<StudentShortResponse> students = _studentService.GetStudentsInfo();
            return View(students);
        }

        [HttpGet]
        [Route("/api/GetStudentInfo/")]
        public StudentFullResponse GetStudentInfo(int? id)
        {
            return _studentService.GetStudent(id);
        }

        [HttpGet]
        [Route("/api/GetStudentWithoutRoom/")]
        public IEnumerable<StudentShortResponse> GetStudentWithoutRoom()
        {
            return _studentService.GetStudentsWithoutRoom();
        }

       
    }
}
