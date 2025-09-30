using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet_project_console.models
{
    public class Pessoa
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public void Apresentar()
        {
            Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
        }
    }
}