export default function FormPage () {
    return (
      <div className="bg-[#04101C] min-h-screen p-5 md:p-10 flex flex-col justify-center items-center gap-6 py-30">
        {/* JUDUL HALAMAN */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-oswald text-4xl text-white uppercase tracking-tighter">
            Create News
          </h1>
          <div className="flex w-1/2 h-0.5">
            <div className="w-1/2 bg-[#004D98]"></div>
            <div className="w-1/2 bg-[#A50044]"></div>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form className="bg-white/5 p-8 rounded-xl border border-white/10 flex flex-col gap-6 max-w-3xl">
          {/* INPUT JUDUL */}
          <div className="flex flex-col gap-2">
            <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
              Post Title
            </label>
            <input
              type="text"
              placeholder="Headline news here..."
              className="bg-transparent border-b border-white/20 py-3 text-white text-2xl font-oswald focus:outline-none focus:border-[#d39820] transition-all placeholder:text-white/10"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* INPUT KATEGORI */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
                Category
              </label>
              <select className="bg-[#0b1e33] border border-white/10 p-3 text-white rounded focus:outline-none focus:border-[#004D98] cursor-pointer">
                <option>MATCH UPDATES</option>
                <option>TRANSFER NEWS</option>
                <option>CLUB STATEMENT</option>
                <option>OPINION</option>
              </select>
            </div>

            {/* INPUT IMAGE URL */}
            <div className="flex flex-col gap-2">
              <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
                Image URL
              </label>
              <input
                type="text"
                placeholder="https://image-link.com"
                className="bg-white/5 border border-white/10 p-3 text-white rounded focus:outline-none focus:border-[#004D98] placeholder:text-white/10"
              />
            </div>
          </div>

          {/* INPUT CONTENT */}
          <div className="flex flex-col gap-2">
            <label className="text-white font-oswald text-sm tracking-widest opacity-50 uppercase">
              Content
            </label>
            <textarea
              rows={8}
              placeholder="Write your story..."
              className="bg-white/5 border border-white/10 p-4 text-white rounded focus:outline-none focus:border-[#004D98] resize-none placeholder:text-white/10"
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="submit"
              className="bg-[#A50044] rounded-xl px-10 py-3 text-white font-oswald uppercase tracking-widest hover:bg-[#8e003a] transition-all shadow-lg"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    );
}