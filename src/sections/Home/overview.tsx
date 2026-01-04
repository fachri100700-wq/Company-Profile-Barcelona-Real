export default function OverviewPage () {
    return (
      <>
        <div className="bg-[#04101C] py-20 px-10">
          <h1 className="font-oswald text-4xl md:text-5xl text-center text-[#d39820] ">
            Més que un club
          </h1>
          <p className="font-inter font-light max-w-4xl mx-auto text-sm md:text-lg text-white text-center mt-5">
            Barcelona is more than just a football club, it is a symbol of
            Catalan identity and a global icon of sporting excellence. With a
            trophy cabinet that speaks of dominance and a style of play that has
            redefined the beautiful game, Barça stands as a beacon of passion
            and ambition on the world stage. The Meaning of "Més que un club" or
            "More than a club" is not just a slogan, it’s our soul. It
            represents our commitment to democratic values, our social
            responsibility through the Barça Foundation, and our unwavering
            belief in "La Masia" shaping not just world-class athletes, but
            extraordinary human beings. To be part of Barça is to belong to a
            family that transcends borders, united by a unique philosophy of
            pride and community.
          </p>

          <div className="mt-7 flex justify-center gap-2">
            <div className="w-12 h-1 bg-[#004D98]"></div>
            <div className="w-12 h-1 bg-[#A50044]"></div>
          </div>
        </div>
      </>
    );
}