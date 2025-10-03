using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace DesafioOneEstacionamento.Models
{
    public class Parking
    {
        private static readonly Regex verify_price = new Regex(@"^\d*\.?\d+$");

        public decimal Price_initial { get; set; }
        public decimal Price_hourly { get; set; }
        public List<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
        public List<User> Users { get; set; } = new List<User>();

        public void ListVehicles()
        {
            if (Vehicles.Count == 0)
            {
                Console.WriteLine("✗ No vehicles registered.");
                return;
            }

            Console.WriteLine("\n==== Vehicles in the Parking Lot ====");
            foreach (var v in Vehicles)
            {
                string status = v.Exit_Time == null ? "In Parking" : $"Exited at {v.Exit_Time}";
                Console.WriteLine($"Plate: {v.Plate} | Owner: {v.Owner} | Entry: {v.Entry_Time} | Status: {status}");
            }
        }


        public decimal? Register_Price_Initial()
        {
            Console.Write("Enter the initial price for the parking lot: ");
            string? input = Console.ReadLine();

            if (string.IsNullOrEmpty(input) || !verify_price.IsMatch(input))
            {
                Console.WriteLine("✗ Invalid price format!");
                return null;
            }

            Price_initial = Convert.ToDecimal(input);
            Console.WriteLine($"✓ Initial price registered: {Price_initial:C}");
            return Price_initial;
        }

        public decimal? Register_Price_Hourly()
        {
            Console.Write("Enter the hourly price for the parking lot: ");
            string? input = Console.ReadLine();

            if (string.IsNullOrEmpty(input) || !verify_price.IsMatch(input))
            {
                Console.WriteLine("✗ Invalid price format!");
                return null;
            }

            Price_hourly = Convert.ToDecimal(input);
            Console.WriteLine($"✓ Hourly price registered: {Price_hourly:C}");
            return Price_hourly;
        }

        public void RegisterVehicle(string plate, string owner)
        {
            Vehicles.Add(new Vehicle
            {
                Plate = plate,
                Owner = owner,
                Entry_Time = DateTime.Now
            });
            Console.WriteLine("✓ Vehicle registered successfully!");
        }

        public void RegisterVehicleExit(string plate, decimal? initial_price, decimal? hourly_price)
        {
            var vehicle = Vehicles.FirstOrDefault(v => v.Plate == plate && v.Exit_Time == null);
            if (vehicle == null)
            {
                Console.WriteLine("✗ Vehicle not found!");
                return;
            }

            vehicle.Exit_Time = DateTime.Now;

            if (initial_price == null || hourly_price == null)
            {
                Console.WriteLine("✗ Prices not configured! Please ask an admin to set them.");
                return;
            }

            var hours = (vehicle.Exit_Time.Value - vehicle.Entry_Time).TotalHours;
            vehicle.Total_Price = initial_price.Value + (decimal)hours * hourly_price.Value;

            Console.WriteLine($"✓ Vehicle exited. Total price: {vehicle.Total_Price:C}");
        }
    }
}