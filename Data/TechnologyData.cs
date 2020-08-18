using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Resume2020.Models;
using System.Text.Json;

namespace Resume2020.Data
{
    public class TechnologyData
    {
        public List<TechItem> Technologies { get; set; }
        
        public TechnologyData(string dataPath)
        {
            try
            {
                string data = File.ReadAllText(dataPath);
                Technologies  = JsonSerializer.Deserialize<List<TechItem>>(data);
            }
            catch (Exception e)
            {

            }
        }
    }
}
