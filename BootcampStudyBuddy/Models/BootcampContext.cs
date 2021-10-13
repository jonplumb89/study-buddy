using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BootcampStudyBuddy.Models
{
    public partial class BootcampContext : DbContext
    {
        public BootcampContext()
        {
        }

        public BootcampContext(DbContextOptions<BootcampContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BootcampFavorite> BootcampFavorites { get; set; }
        public virtual DbSet<BootcampQuestion> BootcampQuestions { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(LocalDb)\\LocalSQLDb;Database=Bootcamp;Trusted_Connection=true;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<BootcampFavorite>(entity =>
            {
                entity.HasKey(e => e.FavoritesId)
                    .HasName("PK__Bootcamp__0E6777B5A1C7EA06");

                entity.Property(e => e.Answers)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.QuestionId).HasColumnName("Question_id");

                entity.Property(e => e.Questions)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.UsersId).HasColumnName("Users_ID");

                entity.HasOne(d => d.Question)
                    .WithMany(p => p.BootcampFavorites)
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("FK__BootcampF__Quest__4F7CD00D");

                entity.HasOne(d => d.Users)
                    .WithMany(p => p.BootcampFavorites)
                    .HasForeignKey(d => d.UsersId)
                    .HasConstraintName("FK__BootcampF__Users__5070F446");
            });

            modelBuilder.Entity<BootcampQuestion>(entity =>
            {
                entity.HasKey(e => e.QuestionId)
                    .HasName("PK__Bootcamp__0DC06FAC9AA81B84");

                entity.Property(e => e.Answers)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.Questions)
                    .HasMaxLength(5000)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
