using Ogo.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ogo.Data.DeveloperHelpers
{
    public static class StudentsHelper
    {
        private static Housing _housing;
        private static List<Room> _rooms;
        public static void TryAddStudents(DatabaseContext context)
        {
            try
            {
                _housing = context.Housings.Where(h => h.Number == 15).FirstOrDefault();
                _rooms = context.Rooms.Where(r => r.Housing.Number == _housing.Number).ToList();

                foreach(Room r in _rooms)
                {
                    string guid = Guid.NewGuid().ToString();
                    Random random = new Random();
                    context.Students.Add(new Student
                    {
                        BirthDay = DateTime.Today,
                        DateOfEnrollment = DateTime.Today,
                        FullName = "Jhon"+ guid.Substring(0,5),
                        GroupName = "PIN-" + guid.Substring(0, 3),
                        Image = guid,
                        isNeededRoom = true,
                        Number = random.Next(100,10000),
                        NumberOfOrderOfEnrollment = random.Next(100, 10000),
                        NumberOfOrderOfHostel = random.Next(100, 10000),
                        PlaceOfBirth = "Krasnodar" + guid.Substring(0, 5),
                        Room= r
                    });
                }
                context.SaveChanges();
            }
            catch
            {
                
            }
            }
       }
}
