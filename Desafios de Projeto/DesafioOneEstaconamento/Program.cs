using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using DesafioOneEstacionamento.Models;

bool system_running = true;
bool user_logged_in = false;
decimal? initial_price = null;
decimal? hourly_price = null;
Parking parking = new Parking();

parking.Users = new List<User>
{
    new User(1, "Gui", "12345678900", "1234"),
    new User(2, "Beltrano", "98765432100", "4321")
};

User? current_user = null;

Console.WriteLine("================================");
Console.WriteLine("Welcome to the Parking System!");
Console.WriteLine("================================");

while (system_running)
{
    Console.WriteLine("\n================================");
    Console.WriteLine("Main Menu - Parking System");
    Console.WriteLine("================================");

    if (initial_price != null)
    {
        Console.WriteLine($"\nInitial Price: {initial_price:C}");
        Console.WriteLine($"Hourly Price: {(hourly_price == null ? "Free" : $"{hourly_price:C}")}");
    }

    Console.WriteLine("\nSelect an option:");
    Console.WriteLine("1 - User Login");
    Console.WriteLine("2 - Register your Vehicle");
    Console.WriteLine("3 - Register Vehicle Exit");
    Console.WriteLine("4 - Exit");
    Console.Write("\n-> ");

    switch (Console.ReadLine())
    {
        case "1":
            Console.WriteLine("-------------- Login --------------");
            User user = new User();
            current_user = user.Login(parking.Users);

            if (current_user != null)
            {
                user_logged_in = true;

                while (user_logged_in == true)
                {
                    Console.WriteLine($"\nSelect an option, {current_user.Name}:");
                    Console.WriteLine("1 - Register Initial Price");
                    Console.WriteLine("2 - Register Hourly Price");
                    Console.WriteLine("3 - See the Vehicles in Parking");
                    Console.WriteLine("4 - Logout");
                    Console.Write("\n-> ");

                    switch (Console.ReadLine())
                    {
                        case "1":
                            initial_price = parking.Register_Price_Initial();
                            break;

                        case "2":
                            hourly_price = parking.Register_Price_Hourly();
                            break;

                        case "3":
                            parking.ListVehicles();
                            break;

                        case "4":
                            current_user = null;
                            user_logged_in = false;
                            Console.WriteLine("✓ Logged out successfully.");
                            break;

                        default:
                            Console.WriteLine("✗ Invalid option!");
                            break;
                    }
                }
            }
            break;

        case "2":
            Console.WriteLine("-------------- Vehicle Entry --------------");
            Console.Write("Enter the vehicle plate: ");
            string plate = Console.ReadLine() ?? "";
            Console.Write("Enter the vehicle owner: ");
            string owner = Console.ReadLine() ?? "";
            parking.RegisterVehicle(plate, owner);
            break;

        case "3":
            Console.WriteLine("-------------- Vehicle Exit --------------");
            Console.Write("Enter the vehicle plate to exit: ");
            string exitPlate = Console.ReadLine() ?? "";
            parking.RegisterVehicleExit(exitPlate, initial_price ?? 0, hourly_price ?? 0);
            break;

        case "4":
            system_running = false;
            Console.WriteLine("Exiting system...");
            break;

        default:
            Console.WriteLine("✗ Invalid option!");
            break;
    }
}