using System;
using System.Collections.Generic;

#nullable disable

namespace BootcampStudyBuddy.Models
{
    public partial class User
    {
        public User()
        {
            BootcampFavorites = new HashSet<BootcampFavorite>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual ICollection<BootcampFavorite> BootcampFavorites { get; set; }
    }
}
