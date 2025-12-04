import materials from "../assets/materials.png";

const Alice = () => {
    return (
        <>
            <section className="pt-12 md:pt-16 pb-8 bg-[url('src/assets/materials.png')]">

                <section className=" w-3/4 mx-auto">
                    <div className="m-1 md:m-20">
                        <h5 className="text-lg text-white ">Our services</h5>
                        <h1 className="text-2xl md:text-6xl text-white  font-extrabold py-5">
                            Professional <br />Cleaning
                        </h1>
                        <p className=" text-white text-lg">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
                            nonumy eirmod tempor invidunt ut labore et dolore magna <br />
                            aliquyam erat, sed diam voluptua.
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Alice;