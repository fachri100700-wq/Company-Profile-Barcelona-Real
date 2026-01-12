import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


export default function NewsPage() {
  const [news, setNews] = useState<any[]>([])
  const [loading, isLoading] = useState(true)

  const myRole = localStorage.getItem("role")    // ngambil role dari local storage

  const handleDelete: any  = async(id: string) => {
    try {
      const hapus: any = await Backendless.Data.of("userNews").remove({ objectId: id })
      setNews(hapus)
    }catch (error) {
      console.log(error)
    }
  }
  
  const fetchNews = async () => {
    try {
      const getNews: any = await Backendless.Data.of("userNews").find()
      console.log("data news", getNews)
      setNews(getNews)
      isLoading(false)
    } catch (error) {
      console.log(error)
      isLoading(false);
    }
  }
  
  useEffect(() => {
    fetchNews()
  }, [])

  if (loading) {
    return (
      <div className="relative bg-[#04101C] py-20 md:py-30 px-8 md:px-10 flex flex-col gap-7 md:gap-10">
        <h1 className="font-oswald text-5xl md:text-7xl text-white">
          BARCA NEWS
        </h1>
        <div className="flex w-full h-1">
          <span className="w-1/2 bg-[#004D98]" />
          <span className="w-1/2 bg-[#A50044]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex flex-col border w-full h-[350px] md:h-[450px] bg-white animate-pulse"
            >
              <div className="w-full h-40 md:h-64 bg-gray-300"></div>
              <div className="flex flex-col p-3 gap-3">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                <div className="mt-2 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="mt-auto h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative bg-[#04101C] py-20 md:py-30 px-8 md:px-10 flex flex-col gap-7 md:gap-10">
        <h1 className="font-oswald text-5xl md:text-7xl text-white">
          BARCA NEWS
        </h1>
        <div className="flex w-full h-1">
          <span className="w-1/2 bg-[#004D98]" />
          <span className="w-1/2 bg-[#A50044]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* ================ MAP ==================== */}

          {news.map((news) => (
            <div
              key={news.objectId}
              className="group relative flex flex-col border w-full h-[250px] md:h-[450px] overflow-hidden"
            >
              <div className="relative h-full w-full">
                {myRole === "admin" && (
                  <div className="absolute right-0 bg-[#A50044] p-2">
                    <FaTrashAlt className=" text-[20px] text-white right-0 " />
                  </div>
                )}
                <img
                  src={news.imageURL}
                  alt={news.postTitle}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute flex flex-col p-1 md:p-4 bg-white inset-0 translate-y-[65%] group group-hover:translate-y-0 duration-500">
                {myRole === "admin" && (
                  <div
                    onClick={() => handleDelete(news.objectId)}
                    className="absolute cursor-pointer opacity-0 group-hover:opacity-100 duration-300 top-0 right-0 bg-[#A50044] p-2 "
                  >
                    <FaTrashAlt className=" text-[20px] text-white right-0 " />
                  </div>
                )}
                <p className="text-black/80 text-xs md:text-sm">
                  {news.created
                    ? new Date(news.created).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "No Date"}
                </p>
                <h1 className="font-oswald font-semibold text-base md:text-3xl">
                  {news.postTitle}
                </h1>
                <h2 className="text-[#A50044]/80 text-xs md:text-sm capitalize">
                  {news.category.toLowerCase()}
                </h2>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <p className="text-black/80 text-xs md:text-sm leading-relaxed line-clamp-6 md:line-clamp-10">
                    {news.content}
                  </p>
                  <NavLink to={`/content/${news.objectId}`}>
                    <button className="mt-2 md:mt-6 text-[#A50044] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all cursor-pointer">
                      Read More <span>→</span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        <NavLink to="/form-page">
          <div className="fixed flex justify-center items-center gap-2 right-5 md:right-10 bottom-5 md:bottom-10 bg-[#A50044] rounded-full text-white px-5 py-1.5 hover:bg-[#67012b]">
            <FaPlus className="text-sm cursor-pointer" />
            <button className="text-base md:text-lg cursor-pointer">
              Create News
            </button>
          </div>
        </NavLink>
      </div>
    </>
  );
}
