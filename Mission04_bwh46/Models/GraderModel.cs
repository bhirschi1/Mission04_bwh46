using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission05_bwh46.Models
{
    //This is what we have to find the data for the form. 
    public class GraderModel
    {
        // Each entry must be between 0 and 100 and that is what the range is doing
        [Range(0, 100)]
        public int Assignments { get; set; }

        [Range(0, 100)]
        public int Group { get; set; }

        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Range(0, 100)]
        public int Midterm { get; set; }

        [Range(0, 100)]
        public int Final { get; set; }

        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
