import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

const blog = {
  title: "সিলেট ভ্রমণ: প্রকৃতির সবুজে হারিয়ে যাওয়ার সম্পূর্ণ গাইড",
  category: "Travel Guide",
  date: "Oct 02, 2026",
  readTime: "6 min read",
  location: "Sylhet, Bangladesh",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEGSrDt9apoJwO6gLOAbX0f59Ko7i6qbo-lXO75KqfljsSyXsDs15jksL&s=10",

  intro:
    "সিলেট বাংলাদেশের অন্যতম সুন্দর ভ্রমণ গন্তব্য। সবুজ চা-বাগান, পাহাড়, নদী, ঝরনা এবং মনোমুগ্ধকর প্রাকৃতিক দৃশ্য সিলেটকে ভ্রমণপ্রেমীদের কাছে বিশেষ করে তুলেছে। প্রকৃতির শান্ত পরিবেশ উপভোগ করতে চাইলে সিলেট হতে পারে আপনার পরবর্তী ভ্রমণের জন্য দারুণ একটি জায়গা।",

  sections: [
    {
      title: "জাফলং",
      text: "সিলেট ভ্রমণে জাফলং অন্যতম জনপ্রিয় গন্তব্য। পাহাড়, স্বচ্ছ নদীর পানি এবং পাথরের অসাধারণ সৌন্দর্য এখানে আপনাকে মুগ্ধ করবে। প্রকৃতির খুব কাছাকাছি সময় কাটানোর জন্য জাফলং দারুণ একটি জায়গা।",
      image:
        "https://d34vm3j4h7f97z.cloudfront.net/original/3X/c/2/c29bcfa05b28d3c7b3d629f89efcbfd054b006f4.jpeg",
    },
    {
      title: "শ্রীমঙ্গল",
      text: "চায়ের রাজধানী হিসেবে পরিচিত শ্রীমঙ্গল তার বিশাল সবুজ চা-বাগানের জন্য বিখ্যাত। সকালে চা-বাগানের ভেতর দিয়ে হাঁটা এবং চারপাশের শান্ত পরিবেশ উপভোগ করা সত্যিই অসাধারণ একটি অভিজ্ঞতা।",
      image:
        "https://www.visit-bangladesh.net/wp-content/uploads/2025/02/Sylhets-Tea-Gardens.jpg",
    },
    {
      title: "বিছানাকান্দি",
      text: "পাহাড়, পাথর ও স্বচ্ছ পানির অপূর্ব সমন্বয় দেখা যায় বিছানাকান্দিতে। বর্ষাকালে এই জায়গার সৌন্দর্য আরও বেড়ে যায় এবং প্রকৃতিপ্রেমীদের জন্য এটি হয়ে ওঠে একটি আকর্ষণীয় গন্তব্য।",
      image:
        "https://greenbelt.com.bd/wp-content/uploads/2020/07/Sylhet-Tour-Panthumai.jpg",
    },
    {
      title: "রাতারগুল",
      text: "রাতারগুল বাংলাদেশের অন্যতম সুন্দর সোয়াম্প ফরেস্ট। পানিতে ভাসতে ভাসতে চারপাশের গাছপালা এবং নীরব প্রকৃতি দেখার অভিজ্ঞতা আপনার সিলেট ভ্রমণকে আরও স্মরণীয় করে তুলবে।",
      image:
        "https://greenbelt.com.bd/wp-content/uploads/2020/07/Ratargul-Green-Belt.jpg",
    },
  ],

  tips: [
    "বর্ষাকালে সিলেটের প্রকৃতি সবচেয়ে সুন্দর দেখা যায়।",
    "ভ্রমণের আগে আবহাওয়া দেখে পরিকল্পনা করুন।",
    "প্রয়োজনীয় পানি ও ব্যক্তিগত ওষুধ সঙ্গে রাখুন।",
    "প্রাকৃতিক পরিবেশ পরিষ্কার রাখুন।",
    "ভ্রমণের সময় স্থানীয় নিয়ম ও নিরাপত্তা নির্দেশনা মেনে চলুন।",
  ],
};

export default function BlogDetailsPage() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* Hero */}
      <section className="relative h-105 overflow-hidden md:h-135">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#172536]/90 via-[#172536]/45 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-5xl px-6 pb-10 md:pb-12 lg:px-8">
            <span className="inline-flex rounded-full bg-[#FF9D0A] px-4 py-2 text-xs font-semibold text-[#172536]">
              {blog.category}
            </span>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
              {blog.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-[#FFB52E]" />
                <span>{blog.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiClock className="text-[#FFB52E]" />
                <span>{blog.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#FFB52E]" />
                <span>{blog.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="px-6 py-12 md:py-16">
        <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm md:p-10">
          {/* Intro */}
          <p className="text-base font-medium leading-8 text-[#334155] md:text-lg">
            {blog.intro}
          </p>

          {/* Sections */}
          <div className="mt-12 space-y-12">
            {blog.sections.map((section, index) => (
              <section key={section.title}>
                <div>
                  <p className="text-sm font-semibold text-[#E88400]">
                    0{index + 1}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#172536] md:text-3xl">
                    {section.title}
                  </h2>
                </div>

                <p className="mt-4 text-[15px] leading-8 text-[#64748B] md:text-base">
                  {section.text}
                </p>

                <div className="relative mt-6 h-65 overflow-hidden rounded-2xl md:h-95">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </section>
            ))}
          </div>

          {/* Travel Tips */}
          <div className="mt-12 rounded-2xl bg-[#FFF8EA] p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#172536]">ভ্রমণ টিপস</h2>

            <div className="mt-6 space-y-4">
              {blog.tips.map((tip) => (
                <div key={tip} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FF9D0A]" />

                  <p className="text-sm leading-7 text-[#475569]">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-[#172536] p-7 md:p-8">
            <p className="text-sm font-semibold text-[#FFB52E]">
              Next Travelers
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              আপনার পরবর্তী ভ্রমণ শুরু হোক আজই
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300">
              Next Travelers-এর সঙ্গে সিলেট এবং বাংলাদেশের অন্যান্য সুন্দর
              গন্তব্য ঘুরে দেখুন।
            </p>

            <Link
              href="/packages"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FF9D0A] px-6 py-3 text-sm font-semibold text-[#172536] transition hover:bg-[#E88400]"
            >
              Tour Packages দেখুন
              <FiArrowRight />
            </Link>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#172536] transition hover:text-[#E88400]"
            >
              ← সব ব্লগ দেখুন
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
