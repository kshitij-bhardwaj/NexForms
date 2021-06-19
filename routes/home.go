package routes

import (
	"github.com/gofiber/fiber/v2"
)

func SpreadHomeRoute(home fiber.Router) {
	home.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello!")
	})
}
