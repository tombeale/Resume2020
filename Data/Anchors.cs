using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Resume2020.Models;

namespace Resume2020.Data
{
    public class Anchors
    {
        public List<Anchor> AnchorList = new List<Anchor>();


        public string Add(string caption, string tag)
        {
            AnchorList.Add(new Anchor(caption, tag));
            return tag;
        }
    }
}
