using Microsoft.EntityFrameworkCore;
using Ogo.Controllers.RoomController;
using Ogo.Controllers.StudentController;
using Ogo.Data;
using System.Collections.Generic;
using System.Linq;

namespace Ogo.Services.RoomServices
{
    public class RoomService : IRoomService
    {
        private readonly DatabaseContext _dbContext;
        public RoomService(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }
        public RoomResponse GetRoomInfo(int? id)
        {

            if (id != null && id != 0)
            {
                List<StudentShortResponse> students = _dbContext.Students.Where(s => s.Room.Id == id).Select(s => new StudentShortResponse
                {
                    Id = s.Id,
                    FullName = s.FullName,
                    GroupName = s.GroupName,
                    Number = s.Number,
                    NumberOfRoom = s.Room.Number
                }).ToList();
                RoomResponse roomResponse = _dbContext.Rooms.Where(r => r.Id == id).Select(r => new RoomResponse
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

        /// <inheritdoc/>
        public IEnumerable<ShortRoomInfoResponse> GetRooms(int housing, int floor)
        {
            return _dbContext.Rooms
                .Include(_ => _.Students)
                .Where(_ => _.Housing.Number == housing && _.Floor == floor)
                .Select(r => new ShortRoomInfoResponse
                {
                    CountOfPossibleStudents = r.CountOfPossibleStudents,
                    Housing = housing,
                    Number = r.Number,
                    RealStudentsCount = r.Students.Count
                });
        }
    }
}
