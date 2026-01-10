import { useFormik } from "formik";
import logo from "../assets/FC_Barcelona_(crest).svg";
import { NavLink } from "react-router-dom";
import { loginSchemas } from "../features/schemas/loginSchemas";
import Backendless from "../library/backendless";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

type User2 = {
  username: string
  password: string
}

export default function LoginPage() {
  const { setEmail } = useAuthStore()

  const navigate = useNavigate()
  
  const onLogin = async ({username, password}: User2) => {
    try {
      const whereCondition = `username = '${username}' AND password = '${password}'`
      let queryBuilder = Backendless.DataQueryBuilder.create()
      queryBuilder.setWhereClause(whereCondition)

      const findUser: any = await Backendless.Data.of("User2").find(queryBuilder)
      
      setEmail(findUser[0].firstName)

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: ({ username, password }: User2) => {
      onLogin({username,password});
      
    },
    validationSchema: loginSchemas,
  });

  return (
    <>
      <div className="bg-gradient-to-r from-[#004D98] via-[#7b0034] to-[#A50044] min-h-screen flex items-center justify-center p-10">
        <form
          onSubmit={formik?.handleSubmit}
          className="bg-[#04101C] flex flex-col justify-center items-center gap-6 px-10 py-12 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md"
        >
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
            <div>
              <input
                name="username"
                id="username"
                onChange={formik?.handleChange}
                value={formik?.values?.username}
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
              />
              <p className="text-red-500 text-xs">{formik?.errors?.username}</p>
            </div>

            <div>
              <input
                name="password"
                id="passoword"
                onChange={formik?.handleChange}
                value={formik?.values?.password}
                type="password"
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 px-5 py-3 text-white font-inter rounded-lg focus:outline-none focus:border-[#A50044] focus:ring-1 focus:ring-[#A50044] transition-all placeholder:text-white/20"
              />
              <p className="text-red-500 text-xs">{formik?.errors?.password}</p>
            </div>

            <button className="mt-2 bg-[#A50044] hover:bg-[#8e003a] text-white font-oswald py-3 rounded-lg uppercase tracking-widest transition-colors duration-300 cursor-pointer">
              Login
            </button>
          </div>

          <div className="flex gap-2 text-xs font-inter">
            <span className="text-white/40">Dont Have any Account?</span>
            <NavLink
              to="/Register"
              className="text-[#d39820] cursor-pointer hover:underline"
            >
              Click here
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
