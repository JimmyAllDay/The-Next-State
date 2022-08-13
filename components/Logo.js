import Link from "next/link";

const Logo = ({ mainNav }) => (
  <Link href="/" className="">
    <a
      className={`font-extrabold text-3xl font-primary justify-center my-auto ${
        mainNav ? "text-gray-900" : "text-gray-200"
      }`}
    >
      The Next State
    </a>
  </Link>
);

export default Logo;
