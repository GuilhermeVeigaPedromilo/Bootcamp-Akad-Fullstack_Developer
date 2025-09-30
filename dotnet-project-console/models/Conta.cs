namespace dotnet_project_console.models
{
    public class Conta
    {
        public decimal Account_Value { get; set; } = 0; // saldo inicial
        public string Name_Bank { get; set; }
        public string Type_Account { get; set; } // "Savings" ou "Checking"
        public string Account_Number { get; set; }

        public void Depositar(decimal valor)
        {
            Account_Value += valor;
            Console.WriteLine($"Deposit of {valor:C} completed. New balance: {Account_Value: C}");
        }
    }
}
