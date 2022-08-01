import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderLinks({ mainNav }) {
  const router = useRouter();

  const navLinks = [
    { name: "Mens", href: "/mens" },
    { name: "Womens", href: "/womens" },
    { name: "Brands", href: "/brands" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <div className="space-x-4 w-1/3 justify-start hidden sm:flex">
      {navLinks.map((link, index) => {
        return (
          <Link key={index} href={link.href}>
            <a
              className={`my-auto ${
                router.pathname === link.href
                  ? mainNav
                    ? "text-gray-900"
                    : "text-gray-200"
                  : mainNav
                  ? "hover:text-gray-900 text-gray-500"
                  : "hover:text-gray-200 text-gray-500"
              }`}
            >
              {link.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
