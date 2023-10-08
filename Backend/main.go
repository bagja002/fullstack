package main

import (
	"backend-meet8/database"
	"backend-meet8/route"
	"log"

	"github.com/gofiber/fiber/v2/middleware/cors"
    "github.com/gofiber/fiber/v2/middleware/logger"

	"github.com/gofiber/fiber/v2"
)

func main() {
    // Membuat aplikasi Fiber baru
    app := fiber.New()

    // Menghubungkan ke database
    database.Connect()

    // Menggunakan middleware CORS dan Logger
    app.Use(cors.New(), logger.New())

    // Mengatur rute HTTP

    // Rute untuk halaman beranda dengan respons "Hello, World!"
    app.Get("/", func (c *fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

    // Rute untuk menerima permintaan pendaftaran (register)
    app.Post("/register", route.CreateUser)

    // Rute untuk menerima permintaan login
    app.Post("/login", route.Login)

    // Mengakhiri aplikasi dan menjalankan server pada port 3001
    log.Fatal(app.Listen(":3001"))
}
