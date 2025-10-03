namespace DesafioOneEstacionamento.Models
{
    public class Vehicle
    {
        public string Plate { get; set; } = string.Empty;
        public string Owner { get; set; } = string.Empty;
        public DateTime Entry_Time { get; set; }
        public DateTime? Exit_Time { get; set; }
        public decimal Total_Price { get; set; }
    }
}