import Link from "next/link";

const Logo = ({ fontColor }) => (
  <Link href="/">
    <a
      className={`hidden sm:inline-flex font-extrabold text-3xl ${fontColor} font-primary w-1/3 justify-center`}
    >
      The Next State
    </a>
  </Link>
);

export default Logo;
