using Microsoft.AspNetCore.Mvc;
using Ogo.Services.RoomServices;
using System.Collections.Generic;


namespace Ogo.Controllers.RoomController
{
    public class RoomController:Controller
    {
        private readonly IRoomService _roomService;
        public RoomController( IRoomService roomService)
        {
            _roomService = roomService;
        }
        [HttpGet]
        [Route("/api/GetRoom")]
        [ProducesResponseType(typeof(RoomResponse), 200)]
        public IActionResult GetRoom(int? id)
        {
            return Ok(_roomService.GetRoomInfo(id));
        }

        [HttpGet]
        [Route("/api/GetFreeRooms")]
        [ProducesResponseType(typeof(List<RoomResponse>), 200)]
        public IActionResult GetFreeRooms()
        {
            return Ok(_roomService.GetFreeRooms());
        }
    }
}
