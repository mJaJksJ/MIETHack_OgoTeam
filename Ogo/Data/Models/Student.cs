using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace Ogo.Data.Models
{
    public class Student
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        public int Number { get; set; }

        [Required]
        [MinLength(10)]
        public string FullName { get; set; }

        [Required]
        public string GroupName { get; set; }

        [Required]
        public DateTime BirthDay { get; set; }

        public string Image { get; set; } 

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Номер приказа не должен быть отрицательным")]
        public int NumberOfOrderOfHostel { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Номер приказа не должен быть отрицательным")]
        public int NumberOfOrderOfEnrollment { get; set; }

        [Required]
        public DateTime DateOfEnrollment { get; set; }

        [Required]
        public string PlaceOfBirth { get; set; } 

        [Required]
        public Room Room { get; set; } 
    }
}
