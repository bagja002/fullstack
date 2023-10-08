package route

import (
	"backend-meet8/database"
	"backend-meet8/models"

	"golang.org/x/crypto/bcrypt"
	"github.com/golang-jwt/jwt/v4"
	"time"

	"github.com/gofiber/fiber/v2"
)

// Membuat pengguna baru (Create User)
func CreateUser(c *fiber.Ctx) error {
	// Membaca data dari permintaan HTTP yang masuk dan memparsingnya menjadi map[string]string
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	// Mengenkripsi password menggunakan bcrypt
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), bcrypt.DefaultCost)

	// Membuat objek User baru dengan data yang diterima
	user := models.User{
		Nama:       data["nama"],
		Email:      data["email"],
		Password:   string(password),
		Nama_bisnis: data["nama_bisnis"],
	}

	// Menyimpan data pengguna ke dalam database
	database.DB.Create(&user)

	// Mengirim respons JSON bahwa akun berhasil dibuat
	return c.JSON(fiber.Map{
		"pesan": "berhasil membuat akun",
	})
}

// Login pengguna
func Login(c *fiber.Ctx) error {
	// Membaca data dari permintaan HTTP yang masuk dan memparsingnya menjadi map[string]string
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		c.JSON(fiber.Map{
			"pesan": err.Error(),
		})
	}

	// Mencari pengguna berdasarkan alamat email
	var user models.User
	database.DB.Where("email = ?", data["email"]).Find(&user)

	// Memeriksa apakah pengguna ditemukan
	if user.Id_user == 0 {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"pesan": "Username tidak di temukan",
		})
	}

	// Memeriksa apakah password yang dimasukkan cocok dengan yang disimpan dalam database
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(data["password"])); err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"pesan": "Incorrect password!",
		})
	} else {
		// Jika berhasil login, membuat token JWT
		claims := jwt.MapClaims{
			"name":     user.Nama,
			"id_admin": user.Id_user,
			"exp":      time.Now().Add(time.Hour * 72).Unix(),
		}
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		t, err := token.SignedString([]byte("secret"))
		if err != nil {
			return c.SendStatus(fiber.StatusInternalServerError)
		}

		// Mengirim token JWT sebagai respons JSON
		return c.JSON(fiber.Map{
			"token": t,
		})
	}
}

// Menghapus pengguna (Delete User)
func DeleteUser(c *fiber.Ctx) error {
	// Implementasikan logika penghapusan pengguna di sini

	return c.JSON(fiber.Map{
		// Kirim respons JSON sesuai kebutuhan
	})
}
