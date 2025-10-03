using System;
using System.Collections.Generic;
using System.Linq;

namespace DesafioOneEstacionamento.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Cpf { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        
        public User() { }
        
        public User(int id, string name, string cpf, string password)
        {
            Id = id;
            Name = name;
            Cpf = cpf;
            Password = password;
        }

        public User? Login(List<User> users)
        {
            Console.Write("Enter your CPF: ");
            string cpf = Console.ReadLine() ?? "";
            
            Console.Write("Enter your password: ");
            string password = Console.ReadLine() ?? "";
            
            User? foundUser = users.FirstOrDefault(u => u.Cpf == cpf && u.Password == password);
            
            if (foundUser != null)
            {
                Console.WriteLine($"\n✓ Welcome, {foundUser.Name}!");
                return foundUser;
            }
            else
            {
                Console.WriteLine("\n✗ Invalid CPF or password!");
                return null;
            }
        }
    }
}