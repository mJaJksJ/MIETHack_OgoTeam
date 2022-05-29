using Ogo.Controllers.RoomController;
using System.Collections.Generic;

namespace Ogo.Services.RoomServices
{
    public interface IRoomService
    {
        public RoomResponse GetRoomInfo(int? id);

        /// <summary>
        /// Получить инофрмацию о комнатах на этаже корпуса
        /// </summary>
        /// <param name="housing">Номер корпуса</param>
        /// <param name="floor">Этаж</param>
        public IEnumerable<ShortRoomInfoResponse> GetRooms(int housing, int floor);

        public List<RoomResponse> GetFreeRooms();
    }
}
