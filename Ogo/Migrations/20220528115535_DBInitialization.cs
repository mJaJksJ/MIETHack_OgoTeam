using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ogo.Migrations
{
    public partial class DBInitialization : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Housings",
                columns: table => new
                {
                    Number = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CountOfFloors = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Housings", x => x.Number);
                });

            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    Number = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    HousingNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    CountOfPossibleStudents = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.Number);
                    table.ForeignKey(
                        name: "FK_Rooms_Housings_HousingNumber",
                        column: x => x.HousingNumber,
                        principalTable: "Housings",
                        principalColumn: "Number",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Number = table.Column<int>(type: "INTEGER", nullable: false),
                    FullName = table.Column<string>(type: "TEXT", nullable: false),
                    BirthDay = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Image = table.Column<string>(type: "TEXT", nullable: true),
                    NumberOfOrderOfHostel = table.Column<int>(type: "INTEGER", nullable: false),
                    NumberOfOrderOfEnrollment = table.Column<int>(type: "INTEGER", nullable: false),
                    DateOfEnrollment = table.Column<DateTime>(type: "TEXT", nullable: false),
                    PlaceOfBirth = table.Column<string>(type: "TEXT", nullable: false),
                    RoomNumber = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Students_Rooms_RoomNumber",
                        column: x => x.RoomNumber,
                        principalTable: "Rooms",
                        principalColumn: "Number",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_HousingNumber",
                table: "Rooms",
                column: "HousingNumber");

            migrationBuilder.CreateIndex(
                name: "IX_Students_RoomNumber",
                table: "Students",
                column: "RoomNumber");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.DropTable(
                name: "Housings");
        }
    }
}
