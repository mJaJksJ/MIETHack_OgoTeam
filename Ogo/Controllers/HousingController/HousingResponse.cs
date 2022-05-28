using Ogo.Controllers.RoomController;
using System.Collections.Generic;

namespace Ogo.Controllers.HousingController
{
    public class HousingResponse
    {
        public List<RoomShortResponse> Rooms { get; set; }
    }
}
