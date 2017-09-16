namespace CatsLoveContacts.Models {
    public class User {
        public long Id { get; set; }

        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public System.DateTime Birthday { get; set; }
        public string Website { get; set; }
        public string Phone { get; set; }
        public bool active { get; set; }
    }
}