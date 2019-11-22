using Microsoft.EntityFrameworkCore.Migrations;

namespace BastArt.Migrations
{
    public partial class CartFix1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Carts_userCartId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "userCartId",
                table: "Users",
                newName: "UserCartId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_userCartId",
                table: "Users",
                newName: "IX_Users_UserCartId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Carts_UserCartId",
                table: "Users",
                column: "UserCartId",
                principalTable: "Carts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Carts_UserCartId",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "UserCartId",
                table: "Users",
                newName: "userCartId");

            migrationBuilder.RenameIndex(
                name: "IX_Users_UserCartId",
                table: "Users",
                newName: "IX_Users_userCartId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Carts_userCartId",
                table: "Users",
                column: "userCartId",
                principalTable: "Carts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
