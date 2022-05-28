using Ogo.Controllers.StudentController;
using Ogo.Data;
using Ogo.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ogo.Services.StudentService
{
    public class StudentService:IStudentService
    {
        private readonly DatabaseContext _db;
        public StudentService(DatabaseContext db)
        {
            _db = db;
        }
          
        public StudentFullResponse GetStudent(int? id)
        {
            if (id != null && id != 0)
            {
                StudentFullResponse student = _db.Students.Where(s=>s.Id == id).Select(s => new StudentFullResponse
                {
                    BirthDay = s.BirthDay.ToString(),
                    DateOfEnrollment = s.DateOfEnrollment.ToString(),
                    FullName = s.FullName,
                    GroupName = s.GroupName,
                    Image = s.Image,
                    Number = s.Number,
                    NumberOfOrderOfEnrollment = s.NumberOfOrderOfEnrollment,
                    NumberOfOrderOfHostel = s.NumberOfOrderOfHostel,
                    NumberOfRoom = s.Room.Number,
                    PlaceOfBirth = s.PlaceOfBirth
                }).ToList()[0];
                return student;
            }
            else
            {
                return null;
            }
           
        }

        public List<StudentShortResponse> GetStudentsInfo()
        {
            List<StudentShortResponse> students = _db.Students.Select(s => new StudentShortResponse
            {
                Id = s.Id,
                Number = s.Number,
                FullName = s.FullName,
                GroupName = s.GroupName,
                NumberOfRoom = s.Room.Number,
                NumberOfHousing = s.Room.Housing.Number
                
            }).ToList();
            return students;
        }

        public IEnumerable<StudentShortResponse> GetStudentsWithoutRoom()
        {
            IEnumerable<StudentShortResponse> students = _db.Students.Where(s=>s.Room == null && s.isNeededRoom == true)
                .Select(s => new StudentShortResponse
            {
                Id = s.Id,
                Number = s.Number,
                FullName = s.FullName,
                GroupName = s.GroupName

            });
            return students;
        }
    }
}
