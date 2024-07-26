const Hero = () => {
  return (
    <div className="w-full py-40">
      <div className="w-[90%] mx-auto max-w-custom_1 grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Discover Your Next Adventure
            <span className="block text-lg md:text-xl pt-4 text-grey font-normal">
              Find the perfect travel package for your next getaway.
            </span>
          </h2>
          <div className="w-full md:flex-row flex-col flex md:items-center gap-4">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="input h-[55px] md:flex-1"
            />
            <button className="btn h-[55px] py-3 rounded-[10px] px-6 text-sm font-semibold border">
              Search
            </button>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};
export default Hero;