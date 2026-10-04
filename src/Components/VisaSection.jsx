"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiCheckCircle,
  FiClock,
  FiFileText,
} from "react-icons/fi";
import Image from "next/image";

const visaData = {
  Singapore: {
    visaType: "Tourist Visa (E-Visa)",
    processingTime: "07 to 10 working days",
    processingFee: "BDT 6,500",
    note: "Processing time may vary depending on the embassy and application.",
  },
  Malaysia: {
    visaType: "Tourist Visa",
    processingTime: "05 to 07 working days",
    processingFee: "BDT 5,500",
    note: "Additional documentation may be required.",
  },
  Thailand: {
    visaType: "Tourist Visa",
    processingTime: "07 to 10 working days",
    processingFee: "BDT 6,000",
    note: "Visa requirements depend on your travel purpose.",
  },
  India: {
    visaType: "Tourist Visa",
    processingTime: "07 to 15 working days",
    processingFee: "BDT 4,500",
    note: "Processing time depends on the relevant visa center.",
  },
};

const VisaPage = () => {
  const [country, setCountry] = useState("Singapore");
  const [selectedVisa, setSelectedVisa] = useState(visaData.Singapore);

  const handleCheck = () => {
    setSelectedVisa(visaData[country]);
  };

  return (
    <main className="min-h-screen ">
      {/* Hero Banner */}
      <section className="relative h-55 overflow-hidden md:h-100">
        <Image
        width={1353}
        height={400}
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80.png"
          alt="World map"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#172536]/35" />

      </section>

      {/* Country Selector */}
      <section className="bg-white px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-bold text-[#172536] md:text-2xl">
            Select your desired country
          </h2>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="h-12 w-full appearance-none rounded-lg border border-[#CBD5E1] bg-white px-4 pr-10 text-sm text-[#475569] outline-none transition focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
              >
                {Object.keys(visaData).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            </div>

            <button
              onClick={handleCheck}
              className="h-12 rounded-lg bg-[#172536] px-8 text-sm font-semibold text-white transition hover:bg-[#26384A]"
            >
              Check
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_330px]">
          {/* Left */}
          <div>
            {/* Summary */}
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-[#172536]">
                Visa Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <FiFileText className="mt-1 shrink-0 text-[#E88400]" />

                  <div>
                    <p className="text-sm font-semibold text-[#172536]">
                      Visa Type
                    </p>
                    <p className="mt-1 text-sm text-[#64748B]">
                      {selectedVisa.visaType}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiClock className="mt-1 shrink-0 text-[#E88400]" />

                  <div>
                    <p className="text-sm font-semibold text-[#172536]">
                      Processing Time
                    </p>
                    <p className="mt-1 text-sm text-[#64748B]">
                      {selectedVisa.processingTime}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FiCheckCircle className="mt-1 shrink-0 text-[#E88400]" />

                  <div>
                    <p className="text-sm font-semibold text-[#172536]">
                      Processing Fee
                    </p>
                    <p className="mt-1 text-sm text-[#64748B]">
                      {selectedVisa.processingFee}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 border-t border-[#E2E8F0] pt-6">
                <p className="text-sm leading-7 text-[#64748B]">
                  You can contact our travel experts for a visa consultation
                  and get assistance with your application and required
                  documents.
                </p>

                <p className="mt-4 text-sm leading-7 text-[#475569]">
                  <span className="font-semibold text-[#172536]">
                    Destination:
                  </span>{" "}
                  {country}
                </p>

                <p className="mt-2 text-sm leading-7 text-[#475569]">
                  <span className="font-semibold text-[#172536]">
                    Important:
                  </span>{" "}
                  {selectedVisa.note}
                </p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-bold text-[#172536]">
                Important Notes
              </h2>

              <ul className="mt-5 space-y-3">
                <li className="flex gap-3 text-sm leading-6 text-[#64748B]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E88400]" />
                  Visa processing times can vary depending on the destination
                  and embassy.
                </li>

                <li className="flex gap-3 text-sm leading-6 text-[#64748B]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E88400]" />
                  Visa approval is subject to the decision of the relevant
                  embassy or immigration authority.
                </li>

                <li className="flex gap-3 text-sm leading-6 text-[#64748B]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E88400]" />
                  Requirements and fees may change without prior notice.
                </li>

                <li className="flex gap-3 text-sm leading-6 text-[#64748B]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E88400]" />
                  We recommend confirming your visa before making
                  non-refundable travel arrangements.
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Assistance Form */}
          <div className="h-fit rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-[#172536]">
              Request Visa Assistance
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Please share your contact information. Our team will get in
              touch with you shortly.
            </p>

            <form className="mt-6 space-y-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#475569]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-11 w-full rounded-lg border border-[#CBD5E1] px-3 text-sm outline-none placeholder:text-[#94A3B8] focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#475569]">
                  Phone Number
                </label>

                <div className="flex">
                  <select className="h-11 rounded-l-lg border border-r-0 border-[#CBD5E1] px-3 text-sm outline-none">
                    <option>+880</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="1XXX XXXXXX"
                    className="h-11 min-w-0 flex-1 rounded-r-lg border border-[#CBD5E1] px-3 text-sm outline-none placeholder:text-[#94A3B8] focus:border-[#FF9D0A]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#475569]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="someone@example.com"
                  className="h-11 w-full rounded-lg border border-[#CBD5E1] px-3 text-sm outline-none placeholder:text-[#94A3B8] focus:border-[#FF9D0A] focus:ring-2 focus:ring-[#FF9D0A]/20"
                />
              </div>

              <button
                type="submit"
                className="h-11 w-full rounded-lg bg-[#FF9D0A] text-sm font-semibold text-[#172536] transition hover:bg-[#E88400] hover:cursor-pointer"
              >
                Submit Request
              </button>
            </form>

            <p className="mt-4 text-center text-xs leading-5 text-[#94A3B8]">
              Our team will contact you regarding your selected destination.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
};

export default VisaPage;
