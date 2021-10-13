using System;
using System.Collections.Generic;

#nullable disable

namespace BootcampStudyBuddy.Models
{
    public partial class BootcampQuestion
    {
        public BootcampQuestion()
        {
            BootcampFavorites = new HashSet<BootcampFavorite>();
        }

        public int QuestionId { get; set; }
        public string Questions { get; set; }
        public string Answers { get; set; }
        public bool Favorites { get; set; }

        public virtual ICollection<BootcampFavorite> BootcampFavorites { get; set; }
    }
}
