using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Ogo.Data.Models
{
    public class Housing
    {
        [Required]
        [Key]
        [Range(1, int.MaxValue, ErrorMessage = "Номер корпуса должен быть больше 0")]
        public int Number { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Количество этажей должно быть больше 0")]
        public int CountOfFloors { get; set; }

        public List<Room> Rooms { get; set; } 
    }
}
