using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Resume2020.Models
{
    public class TechItem
    {
        public string Name { get; set; }

        public string Key { get; set; }

        public int    BaseYear { get; set; }

        public bool   IsEstimate { get; set; } = false;

        public string Text { get; set; }
    }
}
