import React, { useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
//import foto
import GmbarOrang from "./assets/101.jpg";
import { NavLink, useNavigate } from "react-router-dom";

//Kumpulan Style Css per bagian
const StyleGambar = {
  height: `1113px`,
  width: `2641px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `-26px`,
  top: `80px`,
};

const LoginLayerStyle = {
  backgroundColor: `rgba(223, 218, 218, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
  height: `1080px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
};

const KotakLogin = {
  backgroundColor: `rgba(243, 243, 243, 1)`,
  borderRadius: `30px`,
  width: `763px`,
  height: `729px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
};

const Div2 = {
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `763px`,
  height: `729px`,
  left: `578px`,
  top: `176px`,
};
const TitipAjasih = {
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `50px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `504px`,
  height: `40px`,
  position: `absolute`,
  left: `245px`,
  top: `43px`,
};

const StyleLogin = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `30px`,
  width: `516px`,
  height: `79px`,
  position: `absolute`,
  left: `199px`,
  top: `171px`,
};

const PasswordStyle = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `30px`,
  width: `516px`,
  height: `79px`,
  position: `absolute`,
  left: `199px`,
  top: `290px`,
};

const ButtonSyle = {
  backgroundColor: `rgba(139, 146, 211, 1)`,
  border: `1px solid rgba(70, 6, 6, 1)`,
  boxSizing: `border-box`,
  borderRadius: `30px`,
  width: `121px`,
  height: `51px`,
  position: `absolute`,
  left: `594px`,
  top: `419px`,
};
//fungsi Komponen register
function Register() {
  //state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  //event handler
  const handlerSumbit = async (e) => {
    e.preventDefault();

    //mengirim data menggunakan axios
    try {
      // Mengirim permintaan POST ke server
      const response = await axios.post(
        "http://127.0.0.1:3001/login",
        formData
      );

      // Menampilkan respon jika sukses
      if (response.status === 200) {
        // Mendapatkan token dari respon
        const token = response.data.token;

        // Logic jika token ditemukan dalam respon
        if (token) {
          // Menyimpan token dalam localStorage
          localStorage.setItem("jwt", token);

          // Mendapatkan token dari localStorage
          const JwtToken = localStorage.getItem("jwt");
          console.log("jwtToken:", JwtToken);

          // Logic jika token ada, mengarahkan pengguna ke dashboard
          if (JwtToken) {
            navigate("/dashboard");
          } else {
            // Tampilkan pesan jika token tidak ada
            alert("Login Dulu bre");
          }
        } else {
          console.error("Token tidak ditemukan dalam respons");
        }
      } else {
        // Tampilkan pesan jika respon tidak berhasil
        console.error("Respons tidak berhasil dengan status:", response.status);
      }
    } catch (error) {
      // Tangani kesalahan yang mungkin terjadi
      if (error.response) {
        // Set pesan kesalahan dari respons
        setMsg(error.response.data.pesan);
      }
    }
  };
  const handleChange = (e) => {
    // Membaca nama elemen input yang dipicu oleh perubahan
    const inputName = e.target.name;

    // Membaca nilai yang diinputkan atau diubah oleh pengguna
    const inputValue = e.target.value;

    // Menggunakan spread operator (...) untuk membuat salinan objek formData yang sudah ada
    // dan memperbarui properti yang sesuai dengan nilai yang baru
    setFormData({ ...formData, [inputName]: inputValue });
  };

  return (
    <div style={LoginLayerStyle}>
      {/* Komponen Navbar */}
      <Navbar />

      {/* Gambar Orang */}
      <img
        src={GmbarOrang}
        style={StyleGambar}
        loading="lazy"
        alt="GambarOrang"
      />
      <div style={Div2}>
        {/* Kotak Login */}
        <div style={KotakLogin}></div>
        {/* Judul/Login Caption */}
        <span style={TitipAjasih}>Titip Ajasih</span>
        <form onSubmit={handlerSumbit}>
          {/* Label dan Input Email */}
          <label htmlFor="email" />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            style={StyleLogin}
            value={formData.email}
          />

          {/* Label dan Input Password */}
          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            style={PasswordStyle}
            onChange={handleChange}
            value={formData.password}
          />

          {/* Tombol Kirim */}
          <button style={ButtonSyle}>Kirim</button>
        </form>

        {/* Pesan Kesalahan */}
        <div style={{ position: "absolute", top: "400px", left: "200px" }}>
          {msg}
        </div>

        {/* Tautan ke halaman Register */}
        <span style={{ position: "absolute", left: "330px", top: "500px" }}>
          Tidak Punya Akun ?
        </span>
        <NavLink
          style={{ position: "absolute", left: "380px", top: "530px" }}
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </div>
  );
}

export default Register;
