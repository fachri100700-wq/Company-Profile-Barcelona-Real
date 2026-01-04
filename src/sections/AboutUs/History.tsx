import barcalama from "../../assets/About us/images.jpeg"
export default function History() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex flex-col gap-3 w-full max-w-[500px]">
          <img
            src={barcalama}
            alt="oldbarca"
            className="w-full filter grayscale hover:grayscale-0 duration-500 md:hidden"
          />
          <h1 className="font-oswald text-white text-center md:text-left text-2xl md:text-3xl mt-5 md:mt-0">
            More Than 125 Years of Glory
          </h1>
          <p className="font-inter text-white text-sm md:text-base text-center md:text-left opacity-55 font-light">
            Founded in 1899 by Joan Gamper, FC Barcelona has stood the test of
            time as a symbol of hope, identity, and world-class football. From
            the early days at Les Corts to the golden eras that defined
            generations, our history is written in the sweat and passion of
            legends. We don't just count trophies; we count the hearts we've
            touched and the barriers we've broken, remaining a defiant beacon of
            Catalan culture and sporting excellence for over a century.
          </p>
        </div>

        <img
          src={barcalama}
          alt="oldbarca"
          className="w-[400px] filter grayscale hover:grayscale-0 duration-500 hidden md:block"
        />
      </div>
    </>
  );
}
