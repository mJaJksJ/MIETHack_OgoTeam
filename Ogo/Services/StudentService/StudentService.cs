using Ogo.Controllers.StudentController;
using Ogo.Data;
using Ogo.Data.Models;
using System;
using System.Collections.Generic;
using System.IO;
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


        public bool AddStudentToDB(StudentFullRequest student)
        {
                MemoryStream ms = new MemoryStream();
                student.Image.CopyTo(ms);                  
                byte[] bytes = new byte[ms.Length];
                string fileName = Guid.NewGuid().ToString();
                File.WriteAllBytes(Path.Combine(WC.ImagePath, fileName),ms.ToArray());

            Room room = _db.Rooms.Where(r => r.Number == student.NumberOfRoom &&
            r.Housing.Number == student.NumberOfHousing).FirstOrDefault();
            room.Housing = _db.Housings.Where(h => h.Number == student.NumberOfHousing).FirstOrDefault();
            if (room.Housing == null || room == null)
            {
                return false;
            }
            else
            {
                Student newStudent = new Student
                {
                    BirthDay = DateTime.Parse(student.BirthDay),
                    DateOfEnrollment = DateTime.Parse(student.DateOfEnrollment),
                    NumberOfOrderOfEnrollment = student.NumberOfOrderOfEnrollment,
                    FullName = student.FullName,
                    GroupName = student.GroupName,
                    Image = fileName,
                    Number = student.Number,
                    NumberOfOrderOfHostel = student.NumberOfOrderOfHostel,
                    PlaceOfBirth = student.PlaceOfBirth,
                    Room = room

                };
                _db.Students.Add(newStudent);
                _db.SaveChanges();
            }
            return true;
        }
    }
}
