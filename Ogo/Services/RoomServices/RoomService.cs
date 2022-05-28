using Microsoft.EntityFrameworkCore;
using Ogo.Controllers.RoomController;
using Ogo.Controllers.StudentController;
using Ogo.Data;
using Ogo.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace Ogo.Services.RoomServices
{
    public class RoomService:IRoomService
    {
        private readonly DatabaseContext _db;
        public RoomService(DatabaseContext db)
        {
            _db = db;
        }
        public RoomResponse GetRoomInfo(int? id)
        {

            if (id != null && id != 0)
            {
                List<string> students = _db.Students.Where(s => s.Room.Id == id).Select(s => s.FullName).ToList();
                RoomResponse roomResponse = _db.Rooms.Where(r => r.Id == id).Select(r => new RoomResponse
                {
                    Id = r.Id,
                    CountOfPossibleStudents = r.CountOfPossibleStudents,
                    Housing = r.Housing.Number,
                    Number = r.Number,
                    Students = new List<string>()
                }).FirstOrDefault();
                roomResponse.Students.AddRange(students);
                return  roomResponse;
            }
            else
            {
                return null;
            }
        }

        public List<RoomResponse> GetFreeRooms()
        {
            List<Room> rooms = _db.Rooms.Include(u => u.Students).Include(u => u.Housing).
                Where(u => u.Students.Count < u.CountOfPossibleStudents).ToList();

            List<RoomResponse> roomResponses = new List<RoomResponse>();
            foreach(Room item in rooms)
            {
                List<string> FullNames = new List<string>();
                foreach (Student s in item.Students)
                {
                    FullNames.Add(s.FullName);
                }
                roomResponses.Add(new RoomResponse
                {
                    Students = FullNames,
                    CountOfPossibleStudents = item.CountOfPossibleStudents,
                    Housing = item.Housing.Number,
                    Number = item.Number,
                    Id = item.Id
                });
               
                
            }
            return roomResponses;
        }
    }
}
