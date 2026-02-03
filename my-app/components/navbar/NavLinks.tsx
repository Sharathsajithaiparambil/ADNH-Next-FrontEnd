"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "../providers/LenisContext";

export default function NavLinks() {
  const pathname = usePathname();
  const { lenis } = useLenis();

  const handleAboutUsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const aboutUsSection = document.getElementById("about-us");
      if (aboutUsSection && lenis) {
        lenis.scrollTo(aboutUsSection, {
          offset: 0,
          duration: 1.2,
        });
      }
    }
  };

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/sectors", label: "SECTORS" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-5 xl:gap-15">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const isAboutUs = link.href === "/about-us";
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={isAboutUs ? handleAboutUsClick : undefined}
            className={`nav-link text-lg uppercase transition-colors ${
              isActive ? "text-primary font-medium" : "text-gray-800 nav-link-hover"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

