import { NavLink } from 'react-router-dom';
import barcaLogo from '../../assets/FC_Barcelona_(crest).svg'

export default function UpcomingMatch() {
  const match = [
    {
      date: "SAT 07 JAN",
      hours: "20.00",
      liga: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Supercopa_de_Espa%C3%B1a_Logo.png",
      home: "FC BARCELONA",
      imgHome: barcaLogo,
      away: "ATHELETIC CLUB",
      imgAway:
        "https://upload.wikimedia.org/wikipedia/id/e/ea/A_Bilbao_logo.png",
    },
    {
      date: "SAT 18 JAN",
      hours: "21.00",
      liga: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Supercopa_de_Espa%C3%B1a_Logo.png",
      home: "REAL SOCIEDAD",
      imgHome:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsTk3AaRIW7afuuHcnl2jfScTwWFvVsIOTA&s",
      away: "FC BARCELONA",
      imgAway: barcaLogo,
    },
    {
      date: "SAT 21 JAN",
      hours: "21.00",
      liga: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Supercopa_de_Espa%C3%B1a_Logo.png",
      home: "FC BARCELONA",
      imgHome: barcaLogo,
      away: "SLAVIA PRAGUE",
      imgAway:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdY2BqbbE99gTFu1T9NDVZC84riLAmfFih7A&s",
    },
    {
      date: "SAT 25 JAN",
      hours: "21.00",
      liga: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Supercopa_de_Espa%C3%B1a_Logo.png",
      home: "FC BARCELONA",
      imgHome: barcaLogo,
      away: "REAL OVIEDO",
      imgAway:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWlkFKT_EjEZ6-x0neUNhSnMcBoJYNhNJOA&s",
    },
  ];
  
  return (
    <>
      <div className="bg-[#04101C] py-20 px-5">
        <div className="bg-white py-5 px-3 md:px-10 rounded-xl">
          <h1 className="font-oswald text-3xl md:text-5xl text-center">
            Upcoming Match
          </h1>

          {match.map((match, index) => (
            <div className="flex justify-between items-center mt-10 hover:scale-103 duration-300">
              <div className="flex flex-col">
                <p className="font-oswald text-xs md:text-base">{match.date}</p>
                <p className="font-inter text-xs md:text-base font-light">
                  {match.hours}
                </p>
              </div>
              <img
                src={match.liga}
                alt=""
                className="w-8 md:w-15 h-8 md:h-15"
              />
              <div className="flex justify-center items-center gap-3">
                <h1 className="font-oswald text-xs md:text-base font-semibold">
                  {match.home}
                </h1>
                <img
                  src={match.imgHome}
                  alt=""
                  className="w-5 md:w-8 h-5 md:h-8"
                />
                <p className="text-xs md:text-base">VS</p>
                <img
                  src={match.imgAway}
                  alt=""
                  className="w-5 md:w-8 h-5 md:h-8"
                />
                <h1 className="font-oswald font-semibold text-xs md:text-base">
                  {match.away}
                </h1>
              </div>
              <NavLink to="/Ticket">
                <button className="bg-[#d39820] hover:bg-[#8c6517] py-1 px-1 md:px-5 text-xs md:text-base text-white rounded-lg font-oswald font-semibold cursor-pointer">
                  Buy Ticket
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
