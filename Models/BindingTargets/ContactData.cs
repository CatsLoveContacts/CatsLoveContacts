using System.ComponentModel.DataAnnotations;

namespace CatsLoveContacts.Models.BindingTargets {
    public class ContactData {
        [Required]
        public string Firstname { get; set; }
        [Required]
        public string Surname { get; set; }
        public System.DateTime Birthday { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string Phone { get; set; }

        public long Company { get; set; }

        public Contact Contact => new Contact {
            Firstname = Firstname,
            Surname = Surname,
            Birthday = Birthday,
            Email = Email,
            Website = Website,
            Phone = Phone,
            Company = Company == 0 ? null : new Company { Id = Company}
        };
    }
}