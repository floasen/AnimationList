using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTO
{
    public class AnimationWriteDto
    {
        public string Name { get; set;} = string.Empty;
        public string Description { get; set;} = string.Empty;
        public string Code { get; set;} = string.Empty;
        public bool Favorite { get; set;}
    }
}