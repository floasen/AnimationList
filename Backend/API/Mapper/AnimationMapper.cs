using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Model;
using Humanizer;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.VisualBasic;

namespace API.Mapper
{
    public static class AnimationMapper
    {
        public static AnimationReadDto ToAnimationReadDto(this Animation animationModel)
        {
            return new AnimationReadDto
            {
                Id = animationModel.Id,
                Name = animationModel.Name,
                Description = animationModel.Description,
                Code = animationModel.Code,
                Favorite = animationModel.Favorite
            };
        }
        public static Animation ToAnimationWriteDto(this AnimationWriteDto animationDto)
        {
            return new Animation
            {
                Name = animationDto.Name,
                Description = animationDto.Description,
                Code = animationDto.Code,
                Favorite = animationDto.Favorite
            };
        }
    }
}