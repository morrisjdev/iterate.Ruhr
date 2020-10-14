using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SapphireDb.Attributes;

namespace iterate.Ruhr_Server.Data.Models
{
    [DisableCreate]
    [DisableDelete]
    public class Field : Base
    {
        [ForeignKey(nameof(Game))]
        public Guid GameId { get; set; }
        
        [NonCreatable]
        public virtual Game Game { get; set; }
        
        [Updateable]
        public FieldValue Value { get; set; }

        [Required]
        public int X { get; set; }

        [Required]
        public int Y { get; set; }

        public enum FieldValue
        {
            Empty, Player1, Player2
        }
    }
}