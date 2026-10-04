import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";

const packages = [
  {
    id: 1,
    title: "Sylhet Tea Garden Escape",
    location: "Sylhet, Bangladesh",
    duration: "2 Days / 1 Night",
    price: "৳4,500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq3nFxETpE1fM8wstV86JNBJBruElM7r4mdtneoS3ofSzBaEU7GZEguU&s=10",
  },
  {
    id: 2,
    title: "Saint Martin's Island Getaway",
    location: "Saint Martin's Island, Bangladesh",
    duration: "3 Days / 2 Nights",
    price: "৳7,500",
    image: "https://media.istockphoto.com/id/474259514/photo/boat-on-the-tropical-beach.jpg?s=612x612&w=0&k=20&c=1ersoGRQdPK6WLy498-QF33Bvi04VK__1G8IoufvR9E=",
  },
  {
    id: 3,
    title: "Sajek Valley Experience",
    location: "Sajek, Bangladesh",
    duration: "3 Days / 2 Nights",
    price: "৳6,500",
    image: "https://www.resortsbd.com/upload/resort/1778748199_room_image1.png",
  },
];

const PackagesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#FF9D0A]">
              Explore Our Tours
            </p>

            <h2 className="text-3xl font-bold text-[#172536] md:text-4xl">
              Popular Tour Packages
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#64748B] md:text-base">
              Discover carefully planned tour packages and make your next
              Bangladesh adventure simple, comfortable, and memorable.
            </p>
          </div>

          <Link
            href="/packages"
            className="w-fit rounded-lg border border-[#172536] px-5 py-2.5 text-sm font-semibold text-[#172536] transition hover:bg-[#172536] hover:text-white"
          >
            View All Packages
          </Link>
        </div>

        {/* Package Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Price */}
                <div className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-2 shadow-md">
                  <p className="text-xs text-[#64748B]">Starting from</p>
                  <p className="text-lg font-bold text-[#172536]">
                    {pkg.price}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#172536]">
                  {pkg.title}
                </h3>

                {/* Location */}
                <div className="mt-4 flex items-center gap-2 text-sm text-[#64748B]">
                  <FiMapPin className="text-[#FF9D0A]" />
                  <span>{pkg.location}</span>
                </div>

                {/* Duration */}
                <div className="mt-2 flex items-center gap-2 text-sm text-[#64748B]">
                  <FiClock className="text-[#FF9D0A]" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Divider */}
                <div className="my-5 border-t border-[#E2E8F0]" />

                {/* Button */}
                <Link
                  href={'/packagedetails'}
                  className="flex items-center justify-between text-sm font-semibold text-[#172536] transition hover:text-[#FF9D0A]"
                >
                  <span>View Package Details</span>

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
