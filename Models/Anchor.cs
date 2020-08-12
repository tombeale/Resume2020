using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Resume2020.Models
{
    public class Anchor
    {
        public string Caption { get; set; }

        public string Tag { get; set; }

        public Anchor(string caption, string tag)
        {
            Caption = caption;
            Tag = tag;
        }
    }
}
