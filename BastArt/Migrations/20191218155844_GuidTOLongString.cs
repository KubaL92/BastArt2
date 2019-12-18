using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BastArt.Migrations
{
    public partial class GuidTOLongString : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Guid",
                table: "Graphics");

            migrationBuilder.AddColumn<long>(
                name: "Base64Pic",
                table: "Graphics",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Base64Pic",
                table: "Graphics");

            migrationBuilder.AddColumn<Guid>(
                name: "Guid",
                table: "Graphics",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }
    }
}
