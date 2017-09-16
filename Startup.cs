using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.SpaServices.Webpack;
using CatsLoveContacts.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace CatsLoveContacts
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // public Startup(IHostingEnvironment env)
        // {
        //     var builder = new ConfigurationBuilder()
        //     .SetBasePath(env.ContentRootPath)
        //     .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        //     .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

        //     builder.AddEnvironmentVariables();
        //     Configuration = builder.Build();
        // }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddMvc().AddJsonOptions(
                opts => {
                    opts.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Serialize;
                    opts.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                });

			//         services.AddDbContext<DataContext>(options =>
			//	 options.UseSqlServer(Configuration.GetConnectionString("CatsLoveContacts"))
			//);
			services.AddDbContext<DataContext>(options =>
				 options.UseSqlServer("Server=localhost,5100;Database=CatsLoveContacts;User Id=sa;Password=CatsLoveContacts247;MultipleActiveResultSets=true")
			);
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {   
            // var builder = new ConfigurationBuilder()
            // .SetBasePath(env.ContentRootPath)
            // .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            // .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
            // .AddEnvironmentVariables();
            // Configuration = builder.Build();

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseDeveloperExceptionPage();
            app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                HotModuleReplacement = true              
            });

            //if (env.IsDevelopment())
            //{
            //    app.UseDeveloperExceptionPage();
            //}
            //else
            //{
            //    app.UseExceptionHandler("/Home/Error");
            //}

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                routes.MapSpaFallbackRoute("angular-fallback",
                    new { controller = "Home", action = "Index"});
            });

            SeedData.SeedDatabase(app.ApplicationServices.GetRequiredService<DataContext>());
        }
    }
}
