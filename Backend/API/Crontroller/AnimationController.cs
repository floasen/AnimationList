using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Infrastructure;
using API.Mapper;
using API.Model;
using Microsoft.AspNetCore.Mvc;

namespace API.Crontroller
{

    [Route("api/[Controller]")]
    [ApiController]
    public class AnimationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public AnimationController(ApplicationDbContext context)
        {
           _context = context; 
        }

        [HttpGet]
        public IActionResult GetAllAnimation()
        {
            var animations = _context.Animations.ToList();

            return Ok(animations);
        }

        [HttpPost]
        public IActionResult CreateAnimation([FromBody] AnimationWriteDto animationDto)
        {
            var animationModel = animationDto.ToAnimationWriteDto();
            _context.Animations.Add(animationModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(CreateAnimation), new {id = animationModel.Id}, animationModel.ToAnimationReadDto());
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateAnimation([FromRoute] int id, [FromBody] AnimationWriteDto animationDto)
        {
            var animationModel = _context.Animations.FirstOrDefault(x => x.Id == id);

            if(animationModel == null)
            {
                return NotFound();
            }

            animationModel.Name = animationDto.Name;
            animationModel.Description = animationDto.Description;
            animationModel.Code = animationDto.Code;
            animationModel.Favorite = animationDto.Favorite;

            _context.SaveChanges();

            return Ok(animationModel.ToAnimationReadDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteAnimation([FromRoute] int id)
        {
            var animationModel = _context.Animations.FirstOrDefault(x => x.Id == id);

             if(animationModel == null)
            {
                return NotFound();
            }

            _context.Animations.Remove(animationModel);

            _context.SaveChanges();

            return NoContent();
        }
    }
}