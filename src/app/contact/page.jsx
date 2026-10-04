import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="">
      {/* Hero */}
      <section className="bg-[#172536] px-6 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#FF9D0A]">
          Get In Touch
        </p>

        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
          Have a question about a package or need help planning your next
          journey? Our team is here to help.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#172536]">Let's Talk</h2>

            <p className="mt-3 leading-7 text-gray-500">
              Whether you're planning a family vacation, a group tour, or a
              weekend adventure, feel free to reach out to us.
            </p>

            <div className="mt-8 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3D6] text-[#FF9D0A]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-[#172536]">Phone</h3>

                  <p className="mt-1 text-sm text-gray-500">+880 1XXX-XXXXXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3D6] text-[#FF9D0A]">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-[#172536]">Email</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    info@nexttravelers.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3D6] text-[#FF9D0A]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-[#172536]">Office</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF3D6] text-[#FF9D0A]">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-[#172536]">
                    Opening Hours
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Sat - Thu: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8 lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#172536]">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form and we'll get back to you soon.
            </p>

            <form className="mt-8">
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#172536]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#172536]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[#172536]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-[#172536]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What can we help with?"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#172536]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell us about your travel plans..."
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 rounded-lg bg-[#FF9D0A] px-7 py-3 font-semibold text-[#172536] transition hover:cursor-pointer hover:bg-[#E88400]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps?q=Sylhet,Bangladesh&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
            title="Next Travelers Location"
          />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
