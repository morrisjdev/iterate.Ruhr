using System.Collections.Generic;

namespace iterate.Ruhr_Server.Data.Models
{
    public class Game : Base
    {
        public string Key { get; set; }

        public int CurrentPlayer { get; set; }
        
        public virtual List<Field> Fields { get; set; }
    }
}