using Microsoft.AspNetCore.Mvc;
using Ogo.Services.RoomServices;
using System.Collections.Generic;


namespace Ogo.Controllers.RoomController
{
    public class RoomController : Controller
    {
        private readonly IRoomService _roomService;

        public RoomController(IRoomService roomService)
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

        /// <summary>
        /// Получить инофрмацию о комнатах на этаже корпуса
        /// </summary>
        /// <param name="housing">Номер корпуса</param>
        /// <param name="floor">Этаж</param>
        [HttpGet("~/api/rooms/housing/{housing}/floor/{floor}")]
        [ProducesResponseType(typeof(ShortRoomInfoResponse), 200)]
        public IActionResult GetRooms(int housing, int floor)
        {
            var rooms = _roomService.GetRooms(housing, floor);
            return Ok(rooms);
        }
    }
}
