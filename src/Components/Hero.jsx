

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
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#FFB52E]">
      Explore Bangladesh with Next Travelers
    </p>

    <h1 className="max-w-3xl text-4xl font-bold text-white md:text-6xl">
      Discover Bangladesh, Your Way
    </h1>

    <p className="mt-5 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
      From the tea gardens of Sylhet to the beaches, hills, forests, and
      hidden gems across Bangladesh.
    </p>

    {/* Search */}
    <div className="mt-8 w-full">
     
    </div>
  </div>
      </section>
    </div>
  );
};

export default Hero;
