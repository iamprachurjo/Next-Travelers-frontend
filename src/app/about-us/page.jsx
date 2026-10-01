import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-travel.jpg"
              alt="Next Travelers"
              fill
              className="object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 rounded-xl bg-white px-6 py-4 shadow-lg">
              <p className="text-2xl font-bold text-[#172536]">
                10+
              </p>

              <p className="text-sm text-gray-500">
                Travel Experiences
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#FF9D0A]">
              About Next Travelers
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#172536] md:text-4xl">
              Your Journey Begins With Us
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Next Travelers is a Bangladesh-based travel agency dedicated
              to creating memorable journeys across the country. From the
              peaceful tea gardens of Sylhet to the beaches, hills, forests,
              and cultural destinations of Bangladesh, we help travelers
              discover new places with confidence.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We focus on comfortable travel, carefully planned packages,
              and experiences that make every journey special.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF3D6] text-[#FF9D0A]">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-[#172536]">
                    Trusted Service
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Reliable support throughout your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF3D6] text-[#FF9D0A]">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-[#172536]">
                    Local Experiences
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Discover Bangladesh beyond the usual places.
                  </p>
                </div>
              </div>

            </div>

            {/* Button */}
            <Link
              href="/about"
              className="mt-8 inline-block rounded-lg bg-[#FF9D0A] px-6 py-3 font-semibold text-[#172536] transition hover:bg-[#E88400]"
            >
              Learn More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;