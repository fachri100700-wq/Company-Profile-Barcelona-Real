import { useState } from "react";
import logo from "../assets/FC_Barcelona_(crest).svg";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false); // munculin notif

  const navigate = useNavigate(); //pindah page

  function onSubmit(): void {
    const usersJSON = localStorage.getItem("users") as string; //ngambil data

    // VALIDASI FORM
    if (!formRegister.firstName) {
      alert("First name tidak boleh kosong");
      return;
    }

    if (!formRegister.lastName) {
      alert("LastName tidak boleh kosong");
      return;
    }

    if (!formRegister.email) {
      alert("Email tidak boleh kosong");
      return;
    }

    if (!formRegister.password) {
      alert("Password tidak boleh kosong");
      return;
    }
    // validasi email, password, lastname

    // Menjalankan code dibawah setelah validasi semua, dan semuanya aman.

    if (!usersJSON) {
      // data di databse kosong
      // LocalStorage hanya menyimpan string untuk valuenya
      // Jadi kenapa disimpan dengan bentuk JSON, karena JSON dikirim dan disimpan dalam bentuk String.
      localStorage.setItem("users", JSON.stringify([formRegister])); //hanya untuk membuat brangkas bernama users dan khusus user pertama
    } else {
      const users = JSON.parse(usersJSON) as any[];             // 1. string diubah ke object         
      users.push(formRegister);                                 // 2. data yang diubah dipush ke users
      localStorage.setItem("users", JSON.stringify(users));     // 3. users diubah ke string
    }

    // setItem menyimpan getItem untuk mengambil

    setFormRegister({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    setSubmitted(true); // munculin notive
    setTimeout(() => {
      // ngasih delay
      navigate("/Login"); // pindah page ke login
    }, 1000);
  }

  return (
    <>
      {submitted && (
        <div className="absolute top-2 left-1 rounded-full bg-slate-100 text-slate-500 px-4 py-1">
          Berhasil register
        </div>
      )}

      <div className="bg-gradient-to-r from-[#004D98] via-[#7b0034] to-[#A50044] min-h-screen flex items-center justify-center p-10">
        <div className="bg-[#04101C] flex flex-col justify-center items-center gap-6 px-10 py-12 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md">
          <div className="flex flex-col items-center gap-3">
            <img src={logo} alt="Barca Logo" className="h-20 w-20" />
            <h1 className="font-oswald text-3xl text-white tracking-widest">
              FC BARCELONA
            </h1>
            <p className="text-white/50 font-inter text-sm uppercase tracking-tighter">
              Enter your credentials
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="flex justify-center items-center gap-4">
              <input
                onChange={(e) => {
                  setFormRegister((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }));
                }}
                value={formRegister.firstName}
                type="text"
                placeholder="First Name"
                className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
              />
              <input
                onChange={(e) => {
                  // e itu elemen (input)
                  setFormRegister((prev) => ({
                    // menyimpan velue skg (konteksnya nyimpan lastname)
                    ...prev,
                    lastName: e.target.value,
                  }));
                }}
                value={formRegister.lastName}
                type="text"
                placeholder="Last Name"
                className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
              />
            </div>
            <input
              onChange={(e) => {
                setFormRegister((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              value={formRegister.email}
              type="Email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
            />
            <input
              onChange={(e) => {
                setFormRegister((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
              value={formRegister.password}
              type="password"
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
            />
            <button
              onClick={onSubmit}
              className="mt-2 bg-[#A50044] hover:bg-[#8e003a] text-white font-oswald py-3 rounded-lg uppercase tracking-widest transition-colors duration-300 cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
