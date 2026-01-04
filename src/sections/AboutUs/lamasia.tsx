import lamasia from "../../assets/About us/LaMasiaseries.jpg";
export default function Lamasia() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="max-w-[500px] max-h-auto">
          <img
            src={lamasia}
            alt="oldbarca"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 duration-500"
          />
        </div>

        <div className="flex flex-col gap-3 w-full max-w-[500px] text-right">
          <h1 className="font-oswald text-white text-center md:text-left text-2xl md:text-3xl mt-5 md:mt-0">
            Where Legends Are Born
          </h1>
          <p className="font-inter text-white opacity-55 font-light text-sm md:text-base text-center md:text-left">
            La Masia is the soul of our club a world-renowned academy where the
            champions of tomorrow are forged today. It is more than a training
            ground; it is a philosophy that teaches humility, respect, and the
            unique 'Tiki-Taka' DNA that has conquered the world. By nurturing
            homegrown talent like Messi, Xavi, and Iniesta, we ensure that the
            future of Barça always remains true to its roots, proving that true
            greatness is grown, not bought.
          </p>
        </div>
      </div>
    </>
  );
}
