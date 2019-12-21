using Microsoft.EntityFrameworkCore.Migrations;

namespace BastArt.Migrations
{
    public partial class AddPortfolioTags : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tags_Portfolios_PortfolioId",
                table: "Tags");

            migrationBuilder.DropIndex(
                name: "IX_Tags_PortfolioId",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "PortfolioId",
                table: "Tags");

            migrationBuilder.AddColumn<int>(
                name: "PortfolioId",
                table: "PortfolioTags",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PortfolioTags_PortfolioId",
                table: "PortfolioTags",
                column: "PortfolioId");

            migrationBuilder.AddForeignKey(
                name: "FK_PortfolioTags_Portfolios_PortfolioId",
                table: "PortfolioTags",
                column: "PortfolioId",
                principalTable: "Portfolios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PortfolioTags_Portfolios_PortfolioId",
                table: "PortfolioTags");

            migrationBuilder.DropIndex(
                name: "IX_PortfolioTags_PortfolioId",
                table: "PortfolioTags");

            migrationBuilder.DropColumn(
                name: "PortfolioId",
                table: "PortfolioTags");

            migrationBuilder.AddColumn<int>(
                name: "PortfolioId",
                table: "Tags",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tags_PortfolioId",
                table: "Tags",
                column: "PortfolioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_Portfolios_PortfolioId",
                table: "Tags",
                column: "PortfolioId",
                principalTable: "Portfolios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
