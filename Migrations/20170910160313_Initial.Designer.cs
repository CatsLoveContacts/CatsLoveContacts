﻿// <auto-generated />
using CatsLoveContacts.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace CatsLoveContacts.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20170910160313_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CatsLoveContacts.Models.Company", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.Property<string>("Phone");

                    b.Property<string>("Website");

                    b.HasKey("Id");

                    b.ToTable("Companies");
                });

            modelBuilder.Entity("CatsLoveContacts.Models.Contact", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthday");

                    b.Property<long?>("CompanyId");

                    b.Property<string>("Email");

                    b.Property<string>("Firstname");

                    b.Property<string>("Phone");

                    b.Property<string>("Surname");

                    b.Property<string>("Website");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.ToTable("Contacts");
                });

            modelBuilder.Entity("CatsLoveContacts.Models.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthday");

                    b.Property<string>("Email");

                    b.Property<string>("Firstname");

                    b.Property<string>("Password");

                    b.Property<string>("Phone");

                    b.Property<string>("Surname");

                    b.Property<string>("Website");

                    b.Property<bool>("active");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CatsLoveContacts.Models.Contact", b =>
                {
                    b.HasOne("CatsLoveContacts.Models.Company")
                        .WithMany("Contacts")
                        .HasForeignKey("CompanyId");
                });
#pragma warning restore 612, 618
        }
    }
}