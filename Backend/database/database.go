package database

import (
	"backend-meet8/models"
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// DB adalah variabel global yang akan digunakan untuk koneksi database
var DB *gorm.DB

// Connect adalah fungsi untuk menghubungkan ke database
func Connect() {
	// DSN (Data Source Name) adalah string yang berisi informasi tentang koneksi ke database MySQL
	dsn := "root@tcp(127.0.0.1:3306)/fullstack?charset=utf8mb4&parseTime=True&loc=Local"

	// Membuka koneksi ke database MySQL menggunakan GORM
	conn, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		// Jika terjadi kesalahan dalam menghubungkan ke database, cetak pesan kesalahan
		fmt.Println("database tidak dapat terhubung")
	}

	// Jika berhasil terhubung ke database, cetak pesan sukses
	fmt.Println("Database terkoneksi")

	// Mengatur variabel DB untuk digunakan di seluruh aplikasi
	DB = conn

	// AutoMigrate digunakan untuk membuat tabel dalam database jika belum ada
	DB.AutoMigrate(models.User{})
}
