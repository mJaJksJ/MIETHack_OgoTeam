using Ogo.Controllers.RoomController;
using Ogo.Controllers.StudentController;
using Ogo.Data;
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
                List<StudentShortResponse> students = _db.Students.Where(s => s.Room.Id == id).Select(s => new StudentShortResponse
                {
                    Id = s.Id,
                    FullName = s.FullName,
                    GroupName = s.GroupName,
                    Number = s.Number,
                    NumberOfRoom = s.Room.Number
                }).ToList();
                RoomResponse roomResponse = _db.Rooms.Where(r => r.Id == id).Select(r => new RoomResponse
                {
                    Id = r.Id,
                    CountOfPossibleStudents = r.CountOfPossibleStudents,
                    Housing = r.Housing.Number,
                    Number = r.Number,
                    Students = new List<StudentShortResponse>()
                }).FirstOrDefault();
                roomResponse.Students.AddRange(students);
                return  roomResponse;
            }
            else
            {
                return null;
            }
        }
    }
}
