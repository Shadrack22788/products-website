import materials from "../assets/materials.png";

const Alice = () => {
    return (
        <>
        <section className="relative  pt-60 grid grid-cols-1 md:grid-cols-1 gap-10">
            
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${materials})` }}
            ></div>

    
            <section className="relative w-3/4 mx-auto z-10 flex items-center">
                <div className="m-20">
                    <h5 className="text-lg text-white">Our services</h5>
                    <h1 className="text-6xl text-white font-extrabold py-5">
                        Professional <br />Cleaning
                    </h1>
                    <p className="text-white text-lg">
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