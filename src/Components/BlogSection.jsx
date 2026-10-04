"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Top Places to Visit in Sylhet",
    description:
      "Discover the beautiful tea gardens, waterfalls, rivers, and hidden gems of Sylhet.",
    category: "Travel Guide",
    date: "Oct 02, 2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEGSrDt9apoJwO6gLOAbX0f59Ko7i6qbo-lXO75KqfljsSyXsDs15jksL&s=10",
  },
  {
    title: "A Complete Guide to Cox's Bazar",
    description:
      "Everything you need to know before planning your next beach getaway in Bangladesh.",
    category: "Travel Tips",
    date: "Sep 25, 2026",
    image: "https://www.tourismkeari.com/static/products/45e31bae7ecf9e.jpg",
  },
  {
    title: "Explore the Hills of Bandarban",
    description:
      "Experience breathtaking mountain views, local culture, and unforgettable adventures.",
    category: "Destinations",
    date: "Sep 18, 2026",
    image:
      "https://www.visit-bangladesh.net/wp-content/uploads/2025/05/Nilgiri-Bandarban.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BlogSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#FF9D0A]">
              Travel Stories
            </p>

            <h2 className="text-3xl font-bold text-[#172536] md:text-4xl">
              Travel Stories & Tips
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#64748B] md:text-base">
              Get inspiration, travel tips, and helpful guides for your next
              adventure across Bangladesh.
            </p>
          </div>

          <Link
            href="/blog"
            className="w-fit rounded-lg border border-[#172536] px-5 py-2.5 text-sm font-semibold text-[#172536] transition hover:bg-[#172536] hover:text-white"
          >
            View All Blogs
          </Link>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-[#FF9D0A] px-3 py-1.5 text-xs font-semibold text-[#172536]">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-[#64748B]">{blog.date}</p>

                <h3 className="mt-2 text-xl font-bold leading-7 text-[#172536] transition group-hover:text-[#FF9D0A]">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {blog.description}
                </p>

                <Link
                  href={"/details"}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#172536] transition hover:text-[#FF9D0A]"
                >
                  Read More
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
