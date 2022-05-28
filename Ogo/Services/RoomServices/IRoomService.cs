using Ogo.Controllers.RoomController;
using System.Collections.Generic;

namespace Ogo.Services.RoomServices
{
    public interface IRoomService
    {
        public RoomResponse GetRoomInfo(int? id);

        public List<RoomResponse> GetFreeRooms();
    }
}
