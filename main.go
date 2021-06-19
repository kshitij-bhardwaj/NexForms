package main

import (
	"kshitij-bhardwaj/nexforms/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	home := app.Group("/")
	routes.SpreadHomeRoute(home)
	app.Listen(":3000")
}
