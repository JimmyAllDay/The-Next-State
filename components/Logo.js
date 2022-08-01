import Link from "next/link";

const Logo = ({ mainNav }) => (
  <Link href="/">
    <a
      className={`hidden md:inline-flex font-extrabold text-3xl  font-primary w-1/3 justify-center ${
        mainNav ? "text-gray-900" : "text-gray-200"
      }`}
    >
      The Next State
    </a>
  </Link>
);

export default Logo;
