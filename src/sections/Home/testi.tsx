import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestiPage() {
  const culersReview = [
    {
      content:
        "This platform is a masterpiece for any Blaugrana. The layout is as smooth as prime Tiki-Taka! 🔵🔴",
      name: "Xavi Hernandez Jr.",
      city: "Barcelona",
      country: "Spain",
    },
    {
      content:
        "Finally, a site that respects our heritage while looking futuristic. The dark theme with gold accents is pure class.",
      name: "Marc Gold",
      city: "New York",
      country: "USA",
    },
    {
      content:
        "I've visited many fan sites, but this one's responsiveness is on another level. Visca el Barça! 🏆",
      name: "Siti Aminah",
      city: "Jakarta",
      country: "Indonesia",
    },
    {
      content:
        "The player cards are so well-designed. It’s like having a digital museum of the squad right in my pocket.",
      name: "Thomas Muller",
      city: "Berlin",
      country: "Germany",
    },
    {
      content:
        "Clean, fast, and bold. This is exactly how the digital home of the world's greatest club should look.",
      name: "Liam O'Connor",
      city: "Dublin",
      country: "Ireland",
    },
    {
      content:
        "Every time I open this page, I feel the Camp Nou atmosphere. The attention to detail in the UI is insane.",
      name: "Mateo Silva",
      city: "Buenos Aires",
      country: "Argentina",
    },
    {
      content:
        "The integration of the RandomUser API for the academy scouts is a genius touch. Great dev work, Ri!",
      name: "Dev Patel",
      city: "Mumbai",
      country: "India",
    },
    {
      content:
        "It’s hard to find a site that balances high-quality images with fast loading. This one nails it perfectly.",
      name: "Chloe Dubois",
      city: "Paris",
      country: "France",
    },
    {
      content:
        "The typography is amazing. That Oswald font really gives it a professional sports news feeling.",
      name: "Kenji Sato",
      city: "Osaka",
      country: "Japan",
    },
    {
      content:
        "More than just a website, it’s a tribute to our colors. Best fan-made project I've seen this year!",
      name: "Daniella Rossi",
      city: "Rome",
      country: "Italy",
    },
  ];

  return (
    <section className="bg-[#04101C] py-20 px-5 md:px-20">
      <h2 className="font-oswald text-4xl md:text-5xl text-[#d39820] text-center mb-12 uppercase italic">
        What Culers Think?
      </h2>

      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="mySwiper !pb-12" // !pb-12 biar pagination-nya gak numpuk sama card
          loop={true}
        >
          {culersReview.map((culersReview, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#A50044] transition-all duration-300 h-full">
                <p className="font-inter text-white/80 italic mb-6">
                  {culersReview.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#A50044] to-[#004D98]"></div>
                  <div>
                    <h4 className="font-oswald text-white uppercase">
                      {culersReview.name}
                    </h4>
                    <p className="font-inter text-xs text-gray-400">
                      {culersReview.city}, {culersReview.country}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
