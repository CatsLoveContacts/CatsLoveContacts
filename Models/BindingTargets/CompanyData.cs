using System.ComponentModel.DataAnnotations;

namespace CatsLoveContacts.Models.BindingTargets {
    public class CompanyData {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Website { get; set; }
        public string Phone { get; set; }

        public Company Company => new Company {
            Name = Name,
            Email = Email,
            Website = Website,
            Phone = Phone
        };
    }
}