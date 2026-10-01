import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#172536] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Footer Content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold">
                Next <span className="text-[#FF9D0A]">Travelers</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-300">
              Discover beautiful destinations across Bangladesh with carefully
              planned trips and memorable travel experiences.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FF9D0A] hover:text-[#172536]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FF9D0A] hover:text-[#172536]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FF9D0A] hover:text-[#172536]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold">Explore</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/" className="transition hover:text-[#FF9D0A]">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/packages"
                  className="transition hover:text-[#FF9D0A]"
                >
                  Packages
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="transition hover:text-[#FF9D0A]"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link href="/about-us" className="transition hover:text-[#FF9D0A]">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="transition hover:text-[#FF9D0A]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-[#FF9D0A]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="transition hover:text-[#FF9D0A]">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/faq" className="transition hover:text-[#FF9D0A]">
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#FF9D0A]"
                >
                  Travel Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#FF9D0A]" />
                <p>Sylhet, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-[#FF9D0A]" />
                <p>+880 1XXX-XXXXXX</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-[#FF9D0A]" />
                <p>info@nexttravelers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Next Travelers. All rights reserved.</p>

          <p>Explore Bangladesh. Create Memories.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
