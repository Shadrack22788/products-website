const Space = ({ image }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white rounded-xl p-8 md:p-12"
        style={{ backgroundImage: `url(${image})`, minHeight: "450px" }}
      >
        
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

        <div className="relative z-10 space-y-4 max-w-lg 
                        text-center md:text-left 
                        mx-auto md:mx-0">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Transform Your Space with Our Cleaning Magic
          </h1>

          <p className="text-base md:text-lg">
            Sample text. Click to select the Text Element.
          </p>

        
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="w-full p-3 rounded-lg text-black bg-white"
            required
          />

          <button className="bg-[#f19a0e] px-6 py-3 rounded-full text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Space;
