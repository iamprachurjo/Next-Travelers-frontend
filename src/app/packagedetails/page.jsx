import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiCheckCircle, FiClock, FiMapPin } from "react-icons/fi";

const packageDetails = {
  title: "Sylhet Tea Garden Escape",
  location: "Sylhet, Bangladesh",
  duration: "2 Days / 1 Night",
  price: "৳4,500",
  image:
    "https://www.visit-bangladesh.net/wp-content/uploads/2025/02/Sylhets-Tea-Gardens.jpg",

  description:
    "Experience the natural beauty of Sylhet with lush tea gardens, peaceful rivers, scenic hills, and some of the region's most beautiful destinations. This carefully planned package is perfect for travelers looking for a relaxing and memorable getaway.",

  highlights: [
    "Explore beautiful tea gardens",
    "Visit Jaflong",
    "Enjoy scenic mountain and river views",
    "Comfortable transportation",
    "Experienced tour support",
    "Memorable local experiences",
  ],

  itinerary: [
    {
      day: "Day 01",
      title: "Arrival & Sylhet Exploration",
      description:
        "Arrive in Sylhet, enjoy breakfast, and begin your journey with visits to the tea gardens and nearby attractions.",
    },
    {
      day: "Day 02",
      title: "Jaflong & Return",
      description:
        "Visit Jaflong, explore the surrounding natural beauty, enjoy some free time, and return to Sylhet.",
    },
  ],
};

const PackageDetails = () => {
  return (
    <main className="bg-[#F8FAFC]">
      {/* Package Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Left Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#E88400]">
                Tour Package
              </p>

              <h1 className="mt-3 text-3xl font-bold text-[#172536] md:text-4xl">
                {packageDetails.title}
              </h1>

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-[#64748B]">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-[#E88400]" />
                  {packageDetails.location}
                </div>

                <div className="flex items-center gap-2">
                  <FiClock className="text-[#E88400]" />
                  {packageDetails.duration}
                </div>
              </div>

              {/* Image */}
              <div className="relative mt-8 h-80 overflow-hidden rounded-2xl md:h-120">
                <Image
                  src={packageDetails.image}
                  alt={packageDetails.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:pt-20">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm lg:sticky lg:top-24">
                <p className="text-sm text-[#64748B]">Starting from</p>

                <h2 className="mt-1 text-3xl font-bold text-[#172536]">
                  {packageDetails.price}
                </h2>

                <p className="mt-1 text-sm text-[#64748B]">per person</p>

                <div className="my-6 border-t border-[#E2E8F0]" />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FiCalendar className="text-[#E88400]" />
                    <div>
                      <p className="text-xs text-[#64748B]">Duration</p>
                      <p className="text-sm font-semibold text-[#172536]">
                        {packageDetails.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-[#E88400]" />
                    <div>
                      <p className="text-xs text-[#64748B]">Destination</p>
                      <p className="text-sm font-semibold text-[#172536]">
                        {packageDetails.location}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href=""
                  className="mt-7 flex w-full items-center justify-center rounded-lg bg-[#FF9D0A] px-6 py-3.5 text-sm font-semibold text-[#172536] transition hover:bg-[#E88400]"
                >
                  Book This Package
                </Link>

                <p className="mt-4 text-center text-xs text-[#94A3B8]">
                  Contact us for availability and booking details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_330px]">
            {/* Main */}
            <div className="space-y-8">
              {/* Description */}
              <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-[#172536]">
                  About This Package
                </h2>

                <p className="mt-4 text-[15px] leading-8 text-[#64748B]">
                  {packageDetails.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-[#172536]">
                  Package Highlights
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {packageDetails.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <FiCheckCircle className="shrink-0 text-xl text-[#E88400]" />

                      <span className="text-sm text-[#475569]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-[#172536]">Tour Plan</h2>

                <div className="mt-8 space-y-8">
                  {packageDetails.itinerary.map((item) => (
                    <div
                      key={item.day}
                      className="relative border-l-2 border-[#FFB52E] pl-6"
                    >
                      <span className="absolute -left-2.25 top-0 h-4 w-4 rounded-full bg-[#FF9D0A]" />

                      <p className="text-sm font-semibold text-[#E88400]">
                        {item.day}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-[#172536]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Info */}
            <aside>
              <div className="rounded-2xl bg-[#172536] p-6">
                <p className="text-sm font-semibold text-[#FFB52E]">
                  Need Help?
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Plan Your Journey With Us
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  Have questions about this package? Contact our travel team for
                  assistance.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 block rounded-lg border border-[#FF9D0A] px-5 py-3 text-center text-sm font-semibold text-[#FFB52E] transition hover:bg-[#FF9D0A] hover:text-[#172536]"
                >
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PackageDetails;
