using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using CatsLoveContacts.Models;

namespace CatsLoveContacts.Models {
    public class SeedData {
        public static void SeedDatabase(DataContext context) {
            context.Database.Migrate();
            
            //Add Users
            if (context.Users.Count() == 0) {
                context.Users.AddRange(
                    new User {
                        Email = "admin@clc.com", Password = "admin"
                    },
                    new User {
                        Email = "kitty", Password = "kitty"
                    }
                );
            }

            //Add Contacts and Companies
            if (context.Contacts.Count() == 0 && context.Companies.Count() == 0) {
                var ww = new Contact {
                    Firstname = "Walter",
                    Surname = "White"
                };
                var jp = new Contact {
                    Firstname = "Jesse",
                    Surname = "Pinkman"
                };
                var sg = new Contact {
                    Firstname = "Saul",
                    Surname = "Goodman"
                };
                var sw = new Contact {
                    Firstname = "Skyler",
                    Surname = "White"
                };
                var hs = new Contact {
                    Firstname = "Hank",
                    Surname = "Schrader"
                };
                var gf = new Contact {
                    Firstname = "Gustavo",
                    Surname = "Fring"
                };
                var me = new Contact {
                    Firstname = "Mike",
                    Surname = "Ehrmentraud"
                };
            
                context.AddRange(
                    new Company {
                        Name = "Los Pollos Hermanos",
                        Contacts = new List<Contact> {
                            gf
                        }
                    },
                    new Company {
                        Name = "A1A Car Wash",
                        Contacts = new List<Contact> {
                            ww, sw 
                        }
                    },
                    new Company {
                        Name = "The Offices of Saul Goodman & Associates",
                        Contacts = new List<Contact> {
                            sg, me 
                        }
                    },
                    new Company {
                        Name = "Blue Crystal Cooking",
                        Contacts = new List<Contact> {
                            ww, jp
                        }
                    },
                    new Company {
                        Name = "Drug Enforcement Agency",
                        Contacts = new List<Contact> {
                            hs 
                        }
                    }
                );
                context.SaveChanges();
            }
        }
    }
}