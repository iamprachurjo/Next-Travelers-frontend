const Hero = () => {
  return (
    <div>
      <section className="relative h-125 md:h-150 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-[50%_45%] md:object-[50%_70%]"
        >
          <source src="/assets/sree1.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#172536]/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div>
            <p className="mb-3 text-[#FF9D0A] font-semibold">Explore Sylhet</p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Discover Sylhet, Naturally
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-gray-200">
              Explore the tea gardens, hills, rivers, and hidden beauty of
              Sylhet with Next Travelers.
            </p>

            <button className="mt-8 rounded-lg bg-[#FF9D0A] px-6 py-3 font-semibold text-[#172536] hover:bg-[#E88400]">
              Explore Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
