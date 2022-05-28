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
        [HttpGet("~/api/rooms")]
        [ProducesResponseType(typeof(ShortRoomInfoResponse), 200)]
        public IActionResult GetRooms(int housing, int floor)
        {
            return Ok(_roomService.GetRooms(housing, floor));
        }
    }
}
