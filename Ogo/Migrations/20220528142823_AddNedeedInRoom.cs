using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ogo.Migrations
{
    public partial class AddNedeedInRoom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isNeededRoom",
                table: "Students",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isNeededRoom",
                table: "Students");
        }
    }
}
