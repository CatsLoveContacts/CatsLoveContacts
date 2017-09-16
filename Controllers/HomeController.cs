using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CatsLoveContacts.Models;

namespace CatsLoveContacts.Controllers
{
    public class HomeController : Controller
    {
        private DataContext context;

        public HomeController(DataContext ctx) {
            context = ctx;
        }

        public IActionResult Index()
        {
            ViewBag.Message = "CatsLoveContacts";
            return View(context.Contacts.First());
        }
    }
}
