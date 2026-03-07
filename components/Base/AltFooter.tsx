import { FaXTwitter, FaGithub } from "react-icons/fa6";


export default function AltFooter() {
    const socials = [
        {
            label: "GitHub",
            href: "https://github.com/FarciarzYT",
            icon: FaGithub,
        },
        {
            label: "Twitter / X",
            href: "https://x.com/FarciarzYT",
            icon: FaXTwitter,
        },
    ];

    return (
        <footer className="relative bg-white/2 border-t pt-2 justify-between items-center flex flex-row border-white/10 mt-32 overflow-hidden backdrop-blur-sm">
            <h1 className="text-3xl font-black text-white/5 leading-none whitespace-nowrap hidden sm:block">
                Web Security Learning Labs
            </h1>
            <div className={"flex flex-row mx-6 gap-2"}>
            {socials.map((social) => {
                const Icon = social.icon;

                return (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="rounded-xl  transition-all duration-200 hover:scale-110 text-white/80 hover:text-white"
                    >
                        <Icon size={22} />
                    </a>
                );
            })}
            </div>
        </footer>
    );
}
