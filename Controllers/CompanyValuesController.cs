using Microsoft.AspNetCore.Mvc;
using CatsLoveContacts.Models;
using CatsLoveContacts.Models.BindingTargets;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;

namespace CatsLoveContacts.Controllers
{
    [Route("api/companies")]
    public class CompanyValuesController : Controller
    {
        private DataContext context;

        public CompanyValuesController(DataContext ctx) {
            context = ctx;
        }

        [HttpGet]
        public IEnumerable<Company> GetCompanies() {
            return context.Companies;
        }

        [HttpGet("{id}")]
        public Company GetCompany(long id) {
            // System.Threading.Thread.Sleep(5000);
            // return context.Companies.Find(id);
            Company result = context.Companies
                .Include(p => p.Contacts)
                .FirstOrDefault(p => p.Id == id);

            if (result.Contacts != null) {
                foreach (Contact c in result.Contacts) {
                    c.Company = null;
                }
            }
            
            return result;
        }

        [HttpPost]
        public IActionResult CreateCompany([FromBody] CompanyData cdata) {
            if (ModelState.IsValid) {
                Company c = cdata.Company;
                context.Add(c);
                context.SaveChanges();
                return Ok(c.Id);
            } else {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceCompany(long id, [FromBody] CompanyData cdata) {
            if (ModelState.IsValid) {
                Company c = cdata.Company;
                c.Id = id;
                context.Update(c);
                context.SaveChanges();
                return Ok(c.Id);
            } else {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCompany(long id) {
            context.Companies.Remove(new Company { Id = id});
            context.SaveChanges();
            return Ok(id);
        }
    }
}
