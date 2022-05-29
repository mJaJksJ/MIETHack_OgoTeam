using Microsoft.EntityFrameworkCore;
using Ogo.Controllers.RoomController;
using Ogo.Controllers.StudentController;
using Ogo.Data;
using Ogo.Data.Models;
using System;
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
        /*public RoomResponse GetRoomInfo(int? id)
        {

            if (id != null && id != 0)
            {
                List<string> students = _dbContext.Students.Where(s => s.Room.Id == id).Select(s => s.FullName).ToList();
                RoomResponse roomResponse = _dbContext.Rooms.Where(r => r.Id == id).Select(r => new RoomResponse
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
        }*/

        public List<RoomResponse> GetFreeRooms()
        {
            List<Room> rooms = _dbContext.Rooms.Include(u => u.Students).Include(u => u.Housing).
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

        /// <inheritdoc/>
        public IEnumerable<StudentShortResponse> GetAdditionalRoomInfo(int roomId)
        {
            Room room;
            try
            {
                room = _dbContext.Rooms
    .Include(_ => _.Students)
    .Include(_ => _.Housing)
    .FirstOrDefault(_ => _.Id == roomId);
            }
            catch
            {
                return Enumerable.Empty<StudentShortResponse>();
            }


            return room != null
                ? room.Students.Select(_ => new StudentShortResponse
                {
                    FullName = _.FullName,
                    GroupName = _.GroupName,
                    Id = _.Id,
                    Number = _.Number,
                    NumberOfHousing = _.Room.Housing.Number,
                    NumberOfRoom = _.Room.Number
                })
                : throw new NullReferenceException($"Не найдена комната с id: {roomId}");
        }

        /// <inheritdoc/>
        public IEnumerable<ShortRoomInfoResponse> GetRooms(int housing, int floor)
        {
            Room[] rooms;
            try
            {
                rooms = _dbContext.Rooms
    .Include(_ => _.Students)
    .Include(_ => _.Housing)
    .Where(_ => _.Housing.Number == housing && _.Floor == floor).ToArray();
            }
            catch
            {
                return Array.Empty<ShortRoomInfoResponse>();
            }

            return rooms
                .Select(r => new ShortRoomInfoResponse
                {
                    Id = r.Id,
                    CountOfPossibleStudents = r.CountOfPossibleStudents,
                    Housing = housing,
                    Number = r.Number,
                    RealStudentsCount = r.Students.Count
                })
                .ToArray();
        }
    }
}
