using Ogo.Controllers.RoomController;

namespace Ogo.Services.RoomServices
{
    public interface IRoomService
    {
        public RoomResponse GetRoomInfo(int? id);
    }
}
