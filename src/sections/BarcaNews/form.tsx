import { useFormik } from "formik";
import LoginPage from "../../component/login";
import { useAuthStore } from "../../stores/useAuthStore";
import { newsSchemas } from "../../features/schemas/newsSchemas";
import Backendless from "backendless"; // Pastikan sudah di-import
import { useNavigate } from "react-router-dom";

type userNews = {
  postTitle: string;
  category: string;
  imageURL: string;
  content: string;
};

export default function FormPage() {
  const { email } = useAuthStore();

  const navigate = useNavigate()

  const onForm = async (values: userNews) => {
    try{
      await Backendless.Data.of("userNews").save(values)

      navigate("/barca-news")
    }catch (error){
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      postTitle: "",
      category: "", // Biar user milih dulu
      imageURL: "",
      content: "",
    },
    validationSchema: newsSchemas,
    onSubmit: (values: userNews) => {
      onForm(values)
    }
  });

  return (
    <>
      {email ? (
        <div className="bg-[#04101C] min-h-screen p-5 md:p-10 flex flex-col justify-center items-center gap-6 py-30">
          {/* JUDUL HALAMAN */}
          <div className="flex flex-col justify-center items-center gap-2 mt-15">
            <h1 className="font-oswald text-4xl text-white uppercase tracking-tighter">
              Create News
            </h1>
            <div className="flex w-1/2 h-0.5">
              <div className="w-1/2 bg-[#004D98]"></div>
              <div className="w-1/2 bg-[#A50044]"></div>
            </div>
          </div>

          {/* FORM CONTAINER */}
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white/5 p-8 rounded-xl border border-white/10 flex flex-col gap-6 w-full max-w-3xl shadow-2xl"
          >
            {/* INPUT JUDUL */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
                Post Title
              </label>
              <input
                name="postTitle"
                id="postTitle"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postTitle}
                type="text"
                placeholder="Headline news here..."
                className="bg-transparent border-b border-white/20 py-3 text-white text-2xl font-oswald focus:outline-none focus:border-[#d39820] transition-all placeholder:text-white/10"
              />
              {formik.touched.postTitle && formik.errors.postTitle && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.postTitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* INPUT KATEGORI */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                  className="bg-[#0b1e33] border border-white/10 p-3 text-white rounded focus:outline-none focus:border-[#004D98] cursor-pointer"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="MATCH UPDATES">MATCH UPDATES</option>
                  <option value="TRANSFER NEWS">TRANSFER NEWS</option>
                  <option value="CLUB STATEMENT">CLUB STATEMENT</option>
                  <option value="OPINION">OPINION</option>
                </select>
                {formik.touched.category &&
                  formik.errors.category && ( // klu user dah klik (touched) dan ada error (errors) maka lakuin yang didalem <p>
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.category}
                    </p>
                  )}
              </div>

              {/* INPUT IMAGE URL */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
                  Image URL
                </label>
                <input
                  name="imageURL"
                  id="imageURL"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.imageURL}
                  type="text"
                  placeholder="https://image-link.com"
                  className="bg-white/5 border border-white/10 p-3 text-white rounded focus:outline-none focus:border-[#004D98] placeholder:text-white/10"
                />
                {formik.touched.imageURL && formik.errors.imageURL && (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.imageURL}
                  </p>
                )}
              </div>
            </div>

            {/* INPUT CONTENT */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
                Content
              </label>
              <textarea
                name="content"
                id="content"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
                rows={8}
                placeholder="Write your story..."
                className="bg-white/5 border border-white/10 p-4 text-white rounded focus:outline-none focus:border-[#004D98] resize-none placeholder:text-white/10"
              />
              {formik.touched.content && formik.errors.content && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.content}
                </p>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-[#A50044] rounded-xl px-10 py-3 text-white font-oswald uppercase tracking-widest hover:bg-[#8e003a] transition-all shadow-lg cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                {formik.isSubmitting ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        
        <LoginPage />
      )}
    </>
  );
}
