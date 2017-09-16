using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CatsLoveContacts.Models {
    public class DataContext : DbContext {
        public DataContext(DbContextOptions<DataContext> opts) : base(opts) {}

        public DbSet<User> Users { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Company> Companies { get; set; }

        // protected override void OnModelCreating(ModelBuilder modelBuilder) {
        // }
    }
}