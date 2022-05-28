﻿using Microsoft.AspNetCore.Mvc;
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
        [Route("api/students")]
        public IActionResult Students()
        {
            IEnumerable<StudentResponse> students = _studentService.GetStudentsInfo();
            return View(students);
        }

    }
}
