using Ogo.Controllers.HousingController;
using System.Collections.Generic;

namespace Ogo.Services.HousingFolder
{
    public interface IHousingService
    {
        public HousingResponse GetHousingInfo(int? number);

    }
}
