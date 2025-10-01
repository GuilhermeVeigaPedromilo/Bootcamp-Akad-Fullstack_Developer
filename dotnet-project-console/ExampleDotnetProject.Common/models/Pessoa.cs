namespace ExampleDotnetProject.Common.models
{
    public class Pessoa
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Cpf { get; set; }

        // Associação 1-para-1
        public Conta Conta { get; set; }

        public void Apresentar()
        {
            Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");
        }

        public void MostrarConta()
        {
            if (Conta != null)
            {
                Console.WriteLine($"Bank: {Conta.Name_Bank}");
                Console.WriteLine($"Type: {Conta.Type_Account}");
                Console.WriteLine($"Number: {Conta.Account_Number}");
                Console.WriteLine($"Balance: {Conta.Account_Value:C}");
            }
            else
            {
                Console.WriteLine("This person does not have an account yet.");
            }
        }
    }
}