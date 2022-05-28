using Microsoft.AspNetCore.Mvc;
using Ogo.Services.RoomServices;


namespace Ogo.Controllers.RoomController
{
    public class RoomController
    {
        private readonly IRoomService _roomService;
        public RoomController( IRoomService roomService)
        {
            _roomService = roomService;
        }
        [HttpGet]
        [Route("/api/GetRoom")]
        public RoomResponse GetRoom(int? id)
        {
            return _roomService.GetRoomInfo(id);
        }
    }
}
