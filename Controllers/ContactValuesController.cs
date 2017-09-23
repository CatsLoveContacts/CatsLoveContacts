using Microsoft.AspNetCore.Mvc;
using CatsLoveContacts.Models;
using CatsLoveContacts.Models.BindingTargets;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace CatsLoveContacts.Controllers
{
    // [Authorize(Roles = "User")]
    [Route("api/contacts")]
    public class ContactValuesController : Controller
    {
        private DataContext context;

        public ContactValuesController(DataContext ctx) {
            context = ctx;
        }

        [HttpGet("{id}")]
        public Contact GetContact(long id) {
            Contact result = context.Contacts
                .Include(p => p.Company)
                .First(p => p.Id == id);
            if (result.Company != null) {
                result.Company.Contacts = null;
                // result.Company.Contacts = result.Company.Contacts.Select(
                //     p => new Contact {
                //         Id = p.Id,
                //         Firstname = p.Firstname,
                //         Surname = p.Surname,
                //         Email = p.Email,
                //         Website = p.Website,
                //         Phone = p.Phone,
                //         Birthday = p.Birthday                        
                //     }
                // );
            }

            return result;
        }

        [HttpGet]
        public IEnumerable<Contact> GetContacts(string company, string search, bool related = false) {
            IQueryable<Contact> query = context.Contacts;

            if (!string.IsNullOrWhiteSpace(company)) {
                string compLower = company.ToLower();
                query = query.Where(p => p.Company.Name.ToLower().Contains(compLower));
            }
            if (!string.IsNullOrWhiteSpace(search)) {
                string searchLower = search.ToLower();
                query = query.Where(p => 
                p.Firstname.ToLower().Contains(searchLower)
                || p.Surname.ToLower().Contains(searchLower)
                || (p.Email ?? p.Email.ToLower()).Contains(searchLower)
                || (p.Website ?? p.Website.ToLower()).Contains(searchLower)
                // || p.Birthday.ToOADate().ToString().ToLower().Contains(searchLower)
                || (p.Phone ?? p.Phone.ToLower()).Contains(searchLower)
                || (p.Company.Phone ?? p.Company.Phone.ToLower()).Contains(searchLower) 
                || (p.Company.Website ?? p.Company.Website.ToLower()).Contains(searchLower)
                || (p.Company.Email ?? p.Company.Email.ToLower()).Contains(searchLower)
                || (p.Company.Name ?? p.Company.Name.ToLower()).Contains(searchLower));
            }

            if (related) {
                query = query.Include(p => p.Company);
                List<Contact> data = query.ToList();
                data.ForEach(p => {
                    if (p.Company != null) {
                        p.Company.Contacts = null;
                    }
                });
                return data;
            } else {
                return query;
            }
        }

        [HttpPost]
        public IActionResult CreateContact([FromBody] ContactData cdata) {
            if (ModelState.IsValid) {
                Contact c = cdata.Contact;
                if (c.Company != null && c.Company.Id != 0) {
                    context.Attach(c.Company);
                }
                context.Add(c);
                context.SaveChanges();
                return Ok(c.Id);
            } else {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceContact(long id, [FromBody] ContactData cdata) {
            if (ModelState.IsValid) {
                Contact c = cdata.Contact;
                c.Id = id;
                if (c.Company != null && c.Company.Id != 0) {
                    context.Attach(c.Company);
                }
                context.Update(c);
                context.SaveChanges();
                return Ok(c.Id);
            } else {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(long id) {
            context.Contacts.Remove(new Contact { Id = id });
            context.SaveChanges();
            return Ok(id);
        }
    }
}
