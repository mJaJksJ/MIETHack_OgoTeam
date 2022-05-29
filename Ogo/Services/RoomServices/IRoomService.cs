using Ogo.Controllers.RoomController;
using Ogo.Controllers.StudentController;
using System.Collections.Generic;

namespace Ogo.Services.RoomServices
{
    public interface IRoomService
    {
        /// <summary>
        /// Получить дополнительную информацию о комнате
        /// </summary>
        /// <param name="roomId">Id комнаты</param>
        IEnumerable<StudentShortResponse> GetAdditionalRoomInfo(int roomId)

        /// <summary>
        /// Получить инофрмацию о комнатах на этаже корпуса
        /// </summary>
        /// <param name="housing">Номер корпуса</param>
        /// <param name="floor">Этаж</param>
        public IEnumerable<ShortRoomInfoResponse> GetRooms(int housing, int floor);

        public List<RoomResponse> GetFreeRooms();
    }
}
