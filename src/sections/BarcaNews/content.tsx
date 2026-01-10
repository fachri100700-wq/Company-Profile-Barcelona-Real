import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backendless from "backendless"; // <--- Pastiin ini ada!

export default function ContentPage() {
  const { id } = useParams<{ id: string }>(); // Ambil ID dari URL
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      // Kita cek dulu, kalau id beneran gak ada, jangan panggil API
      if (!id) return;

      try {
        setLoading(true);
        // Pake "id!" buat yakinin TypeScript kalau ini gak bakal undefined
        const result = await Backendless.Data.of("userNews").findById(id!);
        setNews(result);
      } catch (error) {
        console.error("Gagal ambil detail, Ri!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading)
    return (
      <div className="bg-[#04101C] min-h-screen flex flex-col items-center justify-center gap-5">
        <div className="w-16 h-16 border-4 border-[#004D98] border-t-[#A50044] rounded-full animate-spin"></div>
      </div>
    );
  if (!news)
    return <div className="text-center py-20">Content not found...</div>;

  return (
    <div className="bg-white flex flex-col w-full">
      <div className="h-[400px] md:h-[600px] overflow-hidden">
        <img
          src={news.imageURL}
          alt={news.postTitle}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 py-10 md:py-20 px-5 md:px-32">
        <div className="flex flex-col gap-2">
          <p className="text-black/60 text-sm md:text-base">
            {news.created ? new Date(news.created).toLocaleDateString() : ""}
          </p>
          <h1 className="font-oswald font-bold text-4xl md:text-6xl uppercase leading-tight">
            {news.postTitle}
          </h1>
          <h2 className="text-[#A50044] font-bold tracking-widest capitalize">
            {news.category?.toLowerCase()}
          </h2>
        </div>

        {/* whitespace-pre-line penting biar paragrafnya gak nyambung semua */}
        <div className="text-black/80 text-lg md:text-xl leading-relaxed whitespace-pre-line border-t pt-5">
          {news.content}
        </div>
      </div>
    </div>
  );
}
