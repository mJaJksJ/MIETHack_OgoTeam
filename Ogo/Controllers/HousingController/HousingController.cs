using Microsoft.AspNetCore.Mvc;
using Ogo.Services.HousingFolder;
using System.Collections.Generic;

namespace Ogo.Controllers.HousingController
{
    public class HousingController:Controller
    {
        private readonly IHousingService _housingService;

        public HousingController(IHousingService housingService)
        {
            _housingService = housingService;
        }

        [HttpGet]
        [Route("/api/GetHousing")]
        public HousingResponse GetHousing(int? number)
        {
            return _housingService.GetHousingInfo(number);
        }
    }
}
