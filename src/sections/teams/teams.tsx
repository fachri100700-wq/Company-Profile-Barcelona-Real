import { useState, useEffect } from "react";

export default function TeamsPage() {
  const [players, setPlayers] = useState<any[]>([]);
  // 1. Tambahin state loading (default-nya true karena kita langsung fetch)
  const [isLoading, setIsLoading] = useState(true);

  const onCreatePlayer = async () => {
    try {
      const response = await fetch("https://randomuser.me/api?results=8")         //manggil api
      const data = await response.json();                                         //unboxing api
      setPlayers(data.results)                                                    //mindahin api ke state
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false);
    }
  }

  useEffect(() => {
    onCreatePlayer();
  }, [])


  /* useEffect(() => {
    fetch("https://randomuser.me/api?results=8")              // mengambil data API
      .then((res) => res.json())                              // menerima data api => data diubah menjadi json
      .then((data) => {  
        console.log("inidata", data)                          // hasil sudah bentuk js
        setPlayers(data.results);                             // menyimpan data.result ke player
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []); */

  // 3. KONDISI LOADING: Kalau masih loading, tampilin ini
  if (isLoading) {
    return (
      <div className="bg-[#04101C] min-h-screen flex flex-col items-center justify-center gap-5">
        {/* Spinner pake Tailwind biar simpel tapi asik */}
        <div className="w-16 h-16 border-4 border-[#004D98] border-t-[#A50044] rounded-full animate-spin"></div>
      </div>
    );
  }

  // 4. KONDISI SELESAI: Kalau loading false, baru kodingan lu di bawah ini jalan
  return (
    <>
      <div className="bg-[#04101C] py-20 md:py-30 px-8 md:px-10 flex flex-col gap-7 md:gap-10">
        <h1 className="font-oswald text-5xl md:text-7xl text-white flex flex-col gap-10">
          TEAMS
        </h1>
        <div className="flex w-full h-1">
          <span className="w-1/2 bg-[#004D98]" />
          <span className="w-1/2 bg-[#A50044]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {players.map((player, index) => (
            <div key={index} className="relative h-50 md:h-100 w-full">
              <div className="bg-white h-full w-full">
                <img
                  src={player.picture.large}
                  className="w-full h-full object-cover"
                  alt="player"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#04101C]/100 via-[#04101C]/50 to-transparent flex flex-col justify-end px-3 md:px-5 pb-3 md:pb-5">
                <p className="font-oswald text-xl uppercase text-white">
                  {player.name.first}
                </p>
                <p className="text-[#d39820] text-sm font-inter uppercase">
                  {index % 2 === 0 ? "Staff" : "Executive"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
