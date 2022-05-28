using Ogo.Controllers.HousingController;
using Ogo.Controllers.RoomController;
using Ogo.Data;
using System.Collections.Generic;
using System.Linq;

namespace Ogo.Services.HousingFolder
{
    public class HousingService:IHousingService
    {

        private readonly DatabaseContext _db;
        public HousingService(DatabaseContext db)
        {
            _db = db;
        }
        public HousingResponse GetHousingInfo(int? number)
        {
            if (number != null && number != 0)
            {
                var rooms = _db.Rooms.Where(r=> r.Housing.Number == number).Select(r => new RoomShortResponse
                {
                    Id = r.Id,
                    CountOfPossibleStudents = r.CountOfPossibleStudents,
                    CurrentCountOfStudents = r.Students.Count
                });


                HousingResponse housings = _db.Housings.Select(h => new HousingResponse
                {
                    Rooms = new List<RoomShortResponse>()
                }).FirstOrDefault();
                housings.Rooms.AddRange(rooms);
                return housings;
            }
            else
            {
                return null;
            }
        }
    }
}
