using System.Collections.Generic;
using System.Security.Cryptography;
using SapphireDb.Attributes;

namespace iterate.Ruhr_Server.Data.Models
{
    [CreateEvent(beforeSave: nameof(BeforeCreate))]
    public class Game : Base
    {
        [NonCreatable]
        public string Key { get; set; }

        [NonCreatable]
        [Updateable]
        public int CurrentPlayer { get; set; }
        
        [NonCreatable]
        public virtual List<Field> Fields { get; set; }

        private void BeforeCreate(Context db)
        {
            Key = Nanoid.Nanoid.Generate(size: 4);
            CurrentPlayer = RandomNumberGenerator.GetInt32(1, 3);

            for (int x = 0; x <= 2; x++)
            {
                for (int y = 0; y <= 2; y++)
                {
                    db.Fields.Add(new Field()
                    {
                        X = x,
                        Y = y,
                        GameId = Id
                    });       
                }
            }

            db.SaveChanges();
        }
    }
}