import React, { useState } from "react";
import Navbar from "./navbar";
import axios from "axios";

import GmbarOrang from "./assets/101.jpg";


//kumpulan CSS
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
const NamaStyle = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `30px`,
  width: `516px`,
  height: `79px`,
  position: `absolute`,
  left: `199px`,
  top: `410px`,
};

const NamaBisnisStyle = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `30px`,
  width: `516px`,
  height: `79px`,
  position: `absolute`,
  left: `199px`,
  top: `530px`,
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
  top: `639px`,
};
function Register() {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    nama: "",
    nama_bisnis: "",
    email: "",
    password: "",
  });

  // Event handler untuk mengirim formulir
  const handlerSumbit = (e) => {
    e.preventDefault(); // Mencegah pengiriman formulir yang normal

    // Mengirim data menggunakan Axios ke server
    axios
      .post("http://127.0.0.1:3001/register", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    alert("Akun telah berhasil di buat"); // Menampilkan pesan berhasil
    window.location.reload(); // Mereload halaman setelah berhasil
  };

  // Event handler untuk mengubah state saat input berubah
  const handleChange = (e) => {
    // Menggunakan spread operator untuk membuat salinan state yang sudah ada
    // dan mengganti properti yang sesuai dengan nilai yang baru
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={LoginLayerStyle}>
      {/* Memasukkan komponen Navbar */}
      <Navbar />

      {/* Gambar */}
      <img
        src={GmbarOrang}
        style={StyleGambar}
        loading="lazy"
        alt="GambarOrang"
      />

      {/* Formulir Registrasi */}
      <div style={Div2}>
        <div style={KotakLogin}></div>
        <span style={TitipAjasih}>Titip Ajasih</span>
        <form onSubmit={handlerSumbit}>
          {/* Input Email */}
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

          {/* Input Password */}
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

          {/* Input Nama */}
          <label htmlFor="nama" />
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Masukan Nama"
            style={NamaStyle}
            onChange={handleChange}
            value={formData.nama}
          />

          {/* Input Nama Bisnis */}
          <label htmlFor="nama_bisnis" />
          <input
            type="text"
            id="nama_bisnis"
            name="nama_bisnis"
            placeholder="Masukan Nama Bisnis"
            style={NamaBisnisStyle}
            onChange={handleChange}
            value={formData.nama_bisnis}
          />

          {/* Tombol Kirim */}
          <button style={ButtonSyle}>Kirim</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
