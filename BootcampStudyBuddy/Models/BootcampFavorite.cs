using System;
using System.Collections.Generic;

#nullable disable

namespace BootcampStudyBuddy.Models
{
    public partial class BootcampFavorite
    {
        public int FavoritesId { get; set; }
        public int? QuestionId { get; set; }
        public int? UsersId { get; set; }
        public string Questions { get; set; }
        public string Answers { get; set; }

        public virtual BootcampQuestion Question { get; set; }
        public virtual User Users { get; set; }
    }
}
