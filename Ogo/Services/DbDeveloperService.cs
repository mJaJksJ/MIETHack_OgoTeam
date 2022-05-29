using Ogo.Data;
using Ogo.Data.DeveloperHelpers;

namespace Ogo.Services
{
    public class DbDeveloperService
    {
        private readonly DatabaseContext _databaseContext;
        public DbDeveloperService(DatabaseContext dbContext)
        {
            _databaseContext = dbContext;
        }

        public void TryAddRooms()
        {
            RoomsHelper.TryAddRooms(_databaseContext);
        }

        public void TryAddStudents()
        {
            StudentsHelper.TryAddStudents(_databaseContext);
        }
    }
}
