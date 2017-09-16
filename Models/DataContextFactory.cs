using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Infrastructure;
using CatsLoveContacts.Models;

public class DataContextFactory : IDesignTimeDbContextFactory<DataContext>
{
    // public DataContext Create(DbContextFactoryOptions options)
    // {
    //     // Used only for EF .NET Core CLI tools (update database/migrations etc.)
    //     var builder = new ConfigurationBuilder()
    //         .SetBasePath(Path.Combine(Directory.GetCurrentDirectory()))
    //         .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

    //     var config = builder.Build();

    //     var optionsBuilder = new DbContextOptionsBuilder<DataContext>()
    //         .UseSqlServer(config.GetConnectionString("SearchDataContext"));

    //     return new DataContext(optionsBuilder.Options);
    // }
    public DataContext CreateDbContext(string[] args)
    {
        // var builder = new DbContextOptionsBuilder<DataContext>();
        // builder.UseSqlServer("Server=(local);Database=MvcMovieContext;Trusted_Connection=True;MultipleActiveResultSets=true");
        // return new DataContext(builder.Options);

        //var builder = new ConfigurationBuilder()
        // .SetBasePath(env.ContentRootPath)
        // .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        // .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

        // builder.AddEnvironmentVariables();
        // Configuration = builder.Build();

        var builder = new DbContextOptionsBuilder<DataContext>();
        IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
		  .Build();
        //.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

        //builder.UseSqlServer(configuration.GetConnectionString("Data:Products:ConnectionString"));
        //builder.UseSqlServer(configuration.GetConnectionString(Configuration["Data:Products:ConnectionString"]);

        //builder.UseSqlServer("Server=localhost,5100;Database=CatsLoveContacts;User Id=sa;Password=CatsLoveContacts247;MultipleActiveResultSets=true");
        builder.UseSqlServer("Server=localhost,5100;Database=CatsLoveContacts;User Id=clcadmin;Password=CatsLoveContacts247;MultipleActiveResultSets=true");

        //Console.WriteLine("Connectionstring=> " + configuration.GetSection("Data").GetSection("ConnectionStrings")["CatsLoveContacts"]);
        Console.WriteLine("Directory => " + AppDomain.CurrentDomain.BaseDirectory);
        Console.WriteLine("Connectionstring => " + configuration.GetConnectionString("CatsLoveContacts"));
        //builder.UseSqlServer(configuration.GetConnectionString("CatsLoveContacts"));
        //builder.UseSqlServer(configuration.GetSection("Data").GetSection("ConnectionStrings")["CatsLoveContacts"]);
        
        return new DataContext(builder.Options);
    }
}