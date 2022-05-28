using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Ogo.Data.Models
{
    public class Room
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]    
        [Range(1, int.MaxValue, ErrorMessage = "Номер комнаты должен быть больше 0")]
        public int Number { get; set; }
       
        public List<Student> Students { get; set; }

        [Required]
        public Housing Housing { get; set; }

        [Required]
        [Range(1, WC.MaxCountOfStudentsInRoom, ErrorMessage = "Неверное количество возможных проживающих студентов")]
        public int CountOfPossibleStudents { get; set; }

       
       
       
    }
}
