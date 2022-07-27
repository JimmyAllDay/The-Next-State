import Link from "next/link";

export default function HeaderLinks({ navLinks, fontColor }) {
  return (
    <div className="flex space-x-4 w-1/4 justify-center">
      {navLinks.map((link) => {
        return (
          <Link href={link.href} className="fontColor">
            <a className={`${fontColor} my-auto`}>{link.name}</a>
          </Link>
        );
      })}
    </div>
  );
}
