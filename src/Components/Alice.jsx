import materials from "../assets/materials.png";

const Alice = () => {
  return (
    <>
      <section className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${materials})` }}
      >
        <div className="absolute inset-0 "></div>

        <section className="relative w-11/12 md:w-3/4 mx-auto pt-20 md:pt-40 pb-16">
          <div>
            <h5 className="text-lg text-white">Our services</h5>

            <h1 className="text-3xl md:text-6xl text-white font-extrabold py-5 leading-tight">
              Professional <br /> Cleaning
            </h1>

            <p className="text-white text-base md:text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
              nonumy eirmod tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Alice;












