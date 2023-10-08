import React from "react";
import { NavLink } from "react-router-dom";
import KliemKami from "./KliemKami";

//kumpulan css
const NavStyle = {
  backgroundColor: `white`,
  width: `1920px`,
  height: `87px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
};

const HubungiKamiStyle = {
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1373px`,
  top: `28px`,
};

const KlieniStyle = {
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1748px`,
  top: `28px`,
};

const InfoperusahaanStyle = {
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Poppins`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `1560px`,
    top: `28px`,
  };
  const Masukstyle = {
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Poppins`,
    fontWeight: `400`,
    fontSize: `20px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `1262px`,
    top: `28px`,
  };
  function Navbar() {
    return (
      <div>
        {/* Elemen <nav> digunakan untuk membuat menu navigasi */}
        <nav style={NavStyle}>
          {/* NavLink adalah komponen dari React Router yang digunakan untuk membuat tautan ke berbagai halaman */}
          {/* Ketika tautan diklik, akan mengarahkan ke halaman yang sesuai */}
          <NavLink to="/">
            {/* Teks "Hubungi kami" yang akan ditampilkan dalam tautan */}
            <span style={HubungiKamiStyle}>Hubungi kami</span>
          </NavLink>
  
          <NavLink to="/klienkami">
            <span style={KlieniStyle}>Klien Kami</span>
          </NavLink>
  
          <NavLink to="/infoperusahaan">
            <span style={InfoperusahaanStyle}>Info perusahaan</span>
          </NavLink>
  
          <NavLink to="/login">
            {/* Teks "Masuk" yang akan ditampilkan dalam tautan */}
            <span style={Masukstyle}>Masuk</span>
          </NavLink>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  
