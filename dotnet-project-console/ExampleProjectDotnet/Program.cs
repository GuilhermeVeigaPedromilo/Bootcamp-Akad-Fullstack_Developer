// Console.WriteLine("Hello, World!");

// // dotnet run /$application_name$ - to run the application 
using ExampleDotnetProject.Common.models;

// Entrada de dados
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();

Console.WriteLine("Enter your age:");
int age = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Enter your CPF:");
string cpf = Console.ReadLine();

Console.WriteLine("Bank name:");
string name_bank = Console.ReadLine();

Console.WriteLine("Type account: 1 - Savings / 2 - Checking");
int type_account = Convert.ToInt32(Console.ReadLine());
string typeAccountText = type_account == 1 ? "Savings" : "Checking";

Console.WriteLine("Account number:");
string account_number = Console.ReadLine();

// Criar a conta
Conta novaConta = new Conta
{
    Name_Bank = name_bank,
    Type_Account = typeAccountText,
    Account_Number = account_number
};

// Criar a pessoa e associar a conta
Pessoa person = new Pessoa
{
    Name = name,
    Age = age,
    Cpf = cpf,
    Conta = novaConta // associação direta
};



// Testes
Console.WriteLine("\n===== RESULT =====");
person.Apresentar();
person.MostrarConta();

// Exemplo de operação na conta
Console.WriteLine("\nMaking a deposit of 500...");
person.Conta.Depositar(500);

// Pessoa first_person = new Pessoa();

// first_person.Name = "Gui";
// first_person.Age = 18;
// first_person.Cpf = "123.456.789-00";
// first_person.Apresentar();
// first_person.Create_Account();