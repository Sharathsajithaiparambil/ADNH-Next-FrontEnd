"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/sectors", label: "SECTORS" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  return (
    <nav className="flex items-center gap-15 sm:hidden lg:flex">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
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

