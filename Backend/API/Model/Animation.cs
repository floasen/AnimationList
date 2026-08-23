using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class Animation
    {
        public int Id { get; set;}
        public string Name { get; set;} = string.Empty;
        public string Description { get; set;} = string.Empty;
        public string Code { get; set;} = string.Empty;
        public bool Favorite { get; set;}
    }
}