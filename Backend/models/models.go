package models


type User struct {
	Id_user uint `json:"id_user" gorm:"primaryKey;autoIncrement:true"`
	Nama        string `json:"nama"`
	Nama_bisnis string `json:"nama_bisnis"`
	Email       string `json:"email"`
	Password    string `json:"password"`
}