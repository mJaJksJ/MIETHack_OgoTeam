using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ogo.Migrations
{
    public partial class ReplaceFloorToRoom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Floor",
                table: "Rooms",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Floor",
                table: "Rooms");
        }
    }
}
