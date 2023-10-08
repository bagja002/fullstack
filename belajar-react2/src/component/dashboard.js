import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

//ini Adalah Komponen Dashboard
function Dashboard() {
    //membuat constanta token yang memuat nilai yang ada di lokalstorage 
  const token = localStorage.getItem("jwt");
  //membuat constanta navigate dengan state
  const navigate = useNavigate();
  const [namauser, setNamaUser] = useState("");

  //hooks dalam reactdalah salah satu hook dalam React yang digunakan untuk menangani efek samping dalam komponen fungsional. Efek samping dapat berupa pembaruan state, interaksi dengan API, pengubahan DOM, atau tindakan lain yang tidak langsung terkait dengan renderisasi komponen.
  useEffect(() => {
    if (!token) {
      alert("anda Harus Login COK");
      navigate("/login");
    } else {
      const decodetoken = jwtDecode(token);
      const namauser = decodetoken.name;
      setNamaUser(namauser);
    }
  }, [token, navigate]);
  //untuk Merender tampilan dengan condisional render 
  //dengan skema jika token berisi nilai maka akan merender tampilan selamat datang
  //jika kosong akan merender yang satunya 
  return (
    <div>
        
        {token ? (
            <>
            <span style={{fontSize:"30px"}}> Selamat Datang {namauser}</span>
            <div> 
            <span style={{fontSize:"30px"}}> Selamat Datang Di aplikasi kamiii  </span>
            </div>
            </>
        ) :(
            <div style={{ backgroundColor: "black", width: "100%", height: "100vh" }}></div>
        )}

    </div>
  )
}

export default Dashboard;
