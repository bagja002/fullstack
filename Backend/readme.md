ini adlaah sebuah backend golang 

hal yang pertama harus kamu lakuakn setelah mengclone repo ini yaitu 
1. MEmbuat database baru
2. di folder database.go arahkan ke database yang kamu buat
3. Kolom database akan otomatis terisi sesuai dengan model.go
4. install library yang di butuhkan seperti
   1. "github.com/gofiber/fiber/v2"
   2. 	"github.com/golang-jwt/jwt/v4"
   3. 	"golang.org/x/crypto/bcrypt"
   4. 	"gorm.io/gorm"
   5. 		"gorm.io/driver/mysql"
  
6. Jalanlan dengan Go run main.go 
