export default function ContentPage () {
    return (
      <>
        <div className="bg-white flex flex-col w-full">
          <div className="h-[400px] md:h-[800px] overflow-hidden">
            <img
              src="https://assets.goal.com/images/v3/bltf1b8184b57e6e8fd/GOAL%20-%20Blank%20WEB%20-%20Facebook(1911).jpeg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Messi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 py-10 md:py-20 px-5 md:px-30">
            <div className="flex flex-col gap-2">
              <p className="text-black/80 text-base md:text-xl">2 Jan 2026</p>
              <h1 className="font-oswald font-semibold text-3xl md:text-5xl">
                Messi is The Goat
              </h1>
              <h2 className="text-[#A50044]/80 text-base md:text-xl">
                Opinion
              </h2>
            </div>

            <p className="text-black/80 text-base md:text-lg leading-relaxed">
              Lionel Messi has once again proven why he is the greatest of all
              time, dominating the pitch with his legendary vision and unmatched
              ball control. Even as years pass, his ability to orchestrate the
              game from the midfield remains a masterclass that no other player
              can replicate. A true Blaugrana legend who continues to define the
              very essence of footballing perfection.
            </p>

            <p className="text-black/80 text-base md:text-lg leading-relaxed">
              Beyond the trophies and the countless goals, his legacy at Camp
              Nou is etched into the DNA of the club. His presence alone
              inspires the new generation of La Masia talents, proving that
              greatness isn't just about skill, but about the loyalty and
              passion for the crest.
            </p>
          </div>
        </div>
      </>
    );
}