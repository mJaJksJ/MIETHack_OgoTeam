using Microsoft.EntityFrameworkCore;
using Ogo.Controllers.StudentController;
using Ogo.Data;
using Ogo.Data.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Ogo.Services.StudentService
{
    public class StudentService : IStudentService
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
                StudentFullResponse student = _db.Students.Where(s => s.Id == id).Select(s => new StudentFullResponse
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
                    PlaceOfBirth = s.PlaceOfBirth,
                    NumberOfHousing = s.Room.Housing.Number
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
            IEnumerable<StudentShortResponse> students = _db.Students.Where(s => s.Room == null && s.isNeededRoom == true)
                .Select(s => new StudentShortResponse
                {
                    Id = s.Id,
                    Number = s.Number,
                    FullName = s.FullName,
                    GroupName = s.GroupName

                });
            return students;
        }



        //сделать 2 метода. Студент добавляется без комнаты 
        //второй метод - обновление существуюшего
        //это метод обновления
        public bool AddStudentToDB(StudentFullRequest student)
        {
            string fileName = Guid.NewGuid().ToString();

            //check if this student already in DB
            Student checkStudent = _db.Students.Where(s => s.Number == student.Number).FirstOrDefault();
            if (checkStudent != null)
            {
                return false;
            }

            else
            {

                try
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
                        PlaceOfBirth = student.PlaceOfBirth,
                        Room = null,
                        isNeededRoom = student.IsNeededRoom

                    };
                    _db.Students.Add(newStudent);
                    _db.SaveChanges();
                }
                catch
                {
                    return false;
                }


                MemoryStream ms = new MemoryStream();
                student.Image.CopyTo(ms);
                byte[] bytes = new byte[ms.Length];
                File.WriteAllBytes(Path.Combine(WC.ImagePath, fileName), ms.ToArray());
                return true;
            }
        }

        public bool UpdateRoom(int? studentNumber, int? roomNumber, int? housingNumber)
        {
            if (studentNumber != null && studentNumber != 0 && roomNumber != null && roomNumber != 0
                && housingNumber != null && housingNumber != 0)
            {
                Student student = _db.Students.Where(s => s.Number == studentNumber).FirstOrDefault();
                if (student == null)
                {
                    return false;
                }


                Room room = _db.Rooms.Include(r => r.Housing).Include(r => r.Students).
                    Where(r => r.Number == roomNumber &&
                r.Housing.Number == housingNumber).FirstOrDefault();

                if (room == null)
                {
                    return false;
                }

                if (room.Students.Count >= room.CountOfPossibleStudents)
                {
                    return false;

                }

                student.Room = room;
                _db.SaveChanges();
                return true;

            }
            else
            {
                return false;
            }
        }

        public bool RemoveRoom(int? studentNumber)
        {
            if (studentNumber != null && studentNumber != 0)
            {
                Student student = _db.Students.Where(s => s.Number == studentNumber).
                    Include(s => s.Room).FirstOrDefault();
                student.Room = null;
                _db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool RemoveStudent(int? studentNumber)
        {
            if (studentNumber != null && studentNumber != 0)
            {
                Student student = _db.Students.Where(s => s.Number == studentNumber).FirstOrDefault();
                _db.Students.Remove(student);
                _db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
