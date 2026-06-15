import { FaShield } from "react-icons/fa6";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Landing", href: "/" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Learn", href: "/learn" },
        { label: "Labs", href: "/labs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Docs", href: "/documents" },
        { label: "Blog", href: "/blog" },
        { label: "Other", href: "/other" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Project",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/TomaszTlusty",
      icon: FaGithub,
    },
    {
      label: "Twitter / X",
      href: "https://x.com/TlustyTomasz",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer className="relative bg-white/2 border-t border-white/10 mt-32 overflow-hidden backdrop-blur-sm">
      <div className="w-[85%] mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT CTA SECTION */}
        <section className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <FaShield size={28} />
            <h2 className="text-2xl font-bold">Stay Updated</h2>
          </div>

          <p className="text-white/85 mb-6 leading-relaxed">
            Get updates about new labs, vulnerabilities and security concepts.
            No spam. Just useful stuff.
          </p>

          <div className="flex sm:flex-row flex-col  mb-6 gap-6 ">
            <input
              type="email"
              placeholder={"email@gmail.com"}
              className={
                "rounded-2xl font-semibold transition px-4 py-2 border-white/10  border w-64 bg-white/2 focus:outline-none focus:ring-2 focus:ring-white/10 appearance-none "
              }
            ></input>
            <button className="bg-white rounded-2xl text-black py-2.5 px-2 items-center font-semibold  hover:bg-white/90 hover:translate-x-0.5 hover:-translate-y-1  cursor-pointer w-64 sm:w-fit transition duration-300 transform ">
              <span className={"items-center flex flex-row gap-2 "}>
                <LuMail size={24} />
                Subscribe{" "}
              </span>
            </button>
          </div>
        </section>

        <div
          className={
            "w-[85%] mx-auto py-20 grid grid-cols-1 lg:grid-cols-3 gap-16"
          }
        >
          {/* DYNAMIC LINKS */}
          {footerSections.map((section) => (
            <section key={section.title} className={""}>
              <h3 className="font-semibold mb-4 text-white/90">
                {section.title}
              </h3>

              <ul className="space-y-2 text-white/80 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="absolute bottom-12 right-0 pointer-events-none select-none">
          <h1 className="text-[6vw] font-black text-white/5 leading-none whitespace-nowrap hidden sm:block">
            Web Security Learning Labs
          </h1>
        </div>
      </div>

      <div className="border-t border-white/2 py-6 pt-4 mx-8">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center text-white/50 text-sm gap-4">
          <span>
            © {new Date().getFullYear()} Tomasz Tłusty. All rights reserved.
          </span>

          <span>
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-xl  transition-all duration-200 hover:scale-110 text-white/80 hover:text-white"
                  >
                    <Icon size={22} />
                  </Link>
                );
              })}
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
}
