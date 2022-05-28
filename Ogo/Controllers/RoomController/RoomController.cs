using Microsoft.AspNetCore.Mvc;
using Ogo.Services.RoomServices;


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
        public RoomResponse GetRoom(int? id)
        {
            return _roomService.GetRoomInfo(id);
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
