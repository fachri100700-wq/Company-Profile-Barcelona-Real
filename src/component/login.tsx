import { useState } from "react";
import logo from "../assets/FC_Barcelona_(crest).svg";
import { NavLink, useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function onSubmit() {
    const usersJSON = localStorage.getItem("users") as string;
    const users = JSON.parse(usersJSON) as any[];
    const user = users.find((user) => user.email === formLogin.email);
    console.log(formLogin);
    console.log(user);
    if (!user) {
      setError("Email or password is incorrect");
      return;
    } else {
      // console.log(user.email !== formLogin.email);
      // console.log(user.password !== formLogin.password);
      // return;
      if (user.password !== formLogin.password) {
        setError("Email or password is incorrect");
        return;
      }

      setError("");
      localStorage.setItem("userLogin", JSON.stringify(user));
      navigate("/");
    }
  }

  return (
    <>
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
            <input
              onChange={(e) => {
                setFormLogin((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              value={formLogin.email}
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
            />
            <input
              onChange={(e) => {
                setFormLogin((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
              value={formLogin.password}
              type="password"
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
            />
            {error && (
              <span className="text-red-500 text-sm text-center">
                {error}
              </span>
            )}
            <span></span>
            <button
              onClick={onSubmit}
              className="mt-2 bg-[#A50044] hover:bg-[#8e003a] text-white font-oswald py-3 rounded-lg uppercase tracking-widest transition-colors duration-300 cursor-pointer"
            >
              Login
            </button>
          </div>

          <div className="flex gap-2 text-xs font-inter">
            <span className="text-white/40">Dont Have Account?</span>
            <NavLink
              to="/Register"
              className="text-[#d39820] cursor-pointer hover:underline"
            >
              Click here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
