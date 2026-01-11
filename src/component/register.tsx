import { useFormik } from "formik";
import logo from "../assets/FC_Barcelona_(crest).svg";
import { NavLink, useNavigate } from "react-router-dom";
import { registerSchemas } from "../features/schemas/registerSchemas";
import { IoClose } from "react-icons/io5";

type userRegister = {
  firstName: string
  lastName: string
  username: string
  password: string
}
export default function RegisterPage() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    onSubmit: (values: userRegister) => {
      onRegister(values)
    },
    validationSchema: registerSchemas,
  });


  const onRegister = async (values: userRegister) => {
    try {
      await Backendless.Data.of("User2").save(values)
      navigate("/login")
    }catch (error){
      console.log(error)
    }
  }


  return (
    <>
      <div className="bg-gradient-to-r from-[#004D98] via-[#7b0034] to-[#A50044] min-h-screen flex items-center justify-center p-10">
        <form
          onSubmit={formik.handleSubmit}
          className="relative bg-[#04101C] flex flex-col justify-center items-center gap-6 px-10 py-12 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md"
        >
          <NavLink to="/home" className="absolute right-5 top-5">
            <IoClose className="text-[#A50044] text-4xl cursor-pointer" />
          </NavLink>
          <div className="flex flex-col items-center gap-3">
            <img src={logo} alt="Barca Logo" className="h-20 w-20" />
            <h1 className="font-oswald text-3xl text-white tracking-widest">
              FC BARCELONA
            </h1>
            <p className="text-white/50 font-inter text-sm uppercase tracking-tighter">
              Create your account
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="flex justify-center items-center gap-4">
              <div className="w-full">
                <input
                  name="firstName"
                  id="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
                />
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.firstName}
                </p>
              </div>
              <div className="w-full">
                <input
                  name="lastName"
                  id="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
                />
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.lastName}
                </p>
              </div>
            </div>

            <div className="w-full">
              <input
                name="username"
                id="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
              />
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.username}
              </p>
            </div>

            <div className="w-full">
              <input
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
              />
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </p>
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#A50044] hover:bg-[#8e003a] text-white font-oswald py-3 rounded-lg uppercase tracking-widest transition-colors duration-300 cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          {/* FOOTER SECTION */}
          <div className="flex gap-2 text-xs font-inter">
            <span className="text-white/40">Already have an account?</span>
            <NavLink
              to="/Login"
              className="text-[#d39820] cursor-pointer hover:underline"
            >
              Login here
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
