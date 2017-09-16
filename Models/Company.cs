using System.Collections.Generic; 

namespace CatsLoveContacts.Models {
    public class Company {
        public long Id { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string Phone { get; set; }

       public IEnumerable<Contact> Contacts { get; set; }
    }
}