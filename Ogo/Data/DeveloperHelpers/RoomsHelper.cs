using Microsoft.EntityFrameworkCore;
using Ogo.Data.Models;
using System.Linq;

namespace Ogo.Data.DeveloperHelpers
{
    public static class RoomsHelper
    {
        private static Housing _housing;

        public static void TryAddRooms(DatabaseContext context)
        {
            try
            {
                _housing = new Housing { CountOfFloors = 5, Number = 15 };
                context.Housings.Add(_housing);
                context.SaveChanges();
            }
            catch
            {
                _housing = context.Housings
                    .Include(_ => _.Rooms)
                    .FirstOrDefault(_ => _.Number == 15);
            }

            TryAddRoom(context, 402, 3); TryAddRoom(context, 401, 3);
            TryAddRoom(context, 404, 2); TryAddRoom(context, 403, 2);
            TryAddRoom(context, 406, 4); TryAddRoom(context, 405, 4);
            TryAddRoom(context, 408, 2); TryAddRoom(context, 407, 4);
            TryAddRoom(context, 410, 3); TryAddRoom(context, 409, 3);
            TryAddRoom(context, 412, 4); TryAddRoom(context, 411, 4);
            TryAddRoom(context, 414, 4); TryAddRoom(context, 413, 3);
            TryAddRoom(context, 416, 3); TryAddRoom(context, 415, 4);
            TryAddRoom(context, 418, 3); TryAddRoom(context, 417, 3);
            TryAddRoom(context, 420, 3); TryAddRoom(context, 419, 4);
            TryAddRoom(context, 422, 2); TryAddRoom(context, 421, 2);
            TryAddRoom(context, 424, 2); TryAddRoom(context, 423, 2);
            TryAddRoom(context, 426, 4); TryAddRoom(context, 425, 4);
            TryAddRoom(context, 428, 3); TryAddRoom(context, 427, 4);
            TryAddRoom(context, 430, 4); TryAddRoom(context, 429, 4);
            TryAddRoom(context, 432, 4); TryAddRoom(context, 431, 3);
            TryAddRoom(context, 434, 2); TryAddRoom(context, 433, 3);
            TryAddRoom(context, 436, 4); TryAddRoom(context, 435, 3);
            TryAddRoom(context, 438, 2); TryAddRoom(context, 437, 2);


        }

        private static void TryAddRoom(DatabaseContext context, int number, int countOfPossibleStudents, int floor = 4, int housing = 15)
        {
            try
            {
                var room = new Room
                {
                    Number = number,
                    Floor = floor,
                    CountOfPossibleStudents = countOfPossibleStudents,
                    Housing = _housing
                };
                context.Rooms.Add(room);
                context.SaveChanges();
            }
            catch
            {

            }
        }
    }
}
