using Microsoft.AspNetCore.Mvc;
using Mission05_bwh46.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_bwh46.Controllers
{
    public class GradesController : Controller

        // Our default view that is displayed is Index
    {
        public IActionResult Index()
        {
            return View();
        }

        //Have get req and post req for the view Grader bc this is where we have the form to be submitted

        [HttpGet]
        public IActionResult Grader()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Grader(GraderModel model)
        {
            return View();
        }
    }
}
