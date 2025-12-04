const CedroData = ({ image }) => {
  return (
    <div className=" ">
      <div
        className="relative bg-cover bg-center bg-no-repeat text-3xl p-10 rounded-xl flex-cols-1 md:flex cols-2  "
        style={{ backgroundImage: `url(${image})`, minHeight: "400px" }}
    >

        <div className="absolute inset-0  rounded-xl"></div>


        <div className="relative z-10 space-y-4 max-w-lg pl-40">
          <h1 className="text-3xl font-bold">
            Transform Your Space with Our Cleaning Magic
          </h1>

          <p className="text-lg">
            Sample text. Click to select the Text Element.
          </p>


          <input
            type="email"
            placeholder="Enter a valid email address"
            className=" p-2 rounded-xl text-black bg-white"
            required
          />


          <button className="bg-[#f19a0e] px-5 py-2 rounded-4xl text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CedroData;