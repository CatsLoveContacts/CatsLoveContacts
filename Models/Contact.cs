using System.Collections.Generic;

namespace CatsLoveContacts.Models {
    public class Contact {
        public long Id { get; set; }

        public string Firstname { get; set; }
        public string Surname { get; set; }
        public System.DateTime Birthday { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string Phone { get; set; }

        public Company Company { get; set; }
    }
}