import { Icon } from "@iconify/react";
import { FooterSignUp } from "@/components/index";

function LinksCol({ title, titleFont, linksArr }) {
  const mappedLinks = linksArr.map((link, i) => {
    return (
      <a key={i} href={link.href} className="text-gray-200 hover:text-gray-400">
        {link.name}
      </a>
    );
  });

  return (
    <div className="w-1/4 flex flex-col text-gray-200">
      <h1 className={`text-2xl font-bold ${titleFont} h-2/5`}>{title}</h1>
      {mappedLinks}
    </div>
  );
}

function FooterLinks() {
  const linksColOneArr = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const linksColTwoArr = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];
  const linksColThreeArr = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Investors", href: "/investors" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <div className="w-full md:w-1/2 flex justify-around md:justify-end space-x-4">
      <LinksCol
        title={"The Next State"}
        titleFont={"font-primary"}
        linksArr={linksColOneArr}
      />
      <LinksCol
        title={"Help"}
        titleFont={"font-bold"}
        linksArr={linksColTwoArr}
      />
      <LinksCol
        title={"Follow Us"}
        titleFont={"font-bold"}
        linksArr={linksColThreeArr}
      />
    </div>
  );
}

export default function FooterDetails() {
  return (
    <div className="flex flex-col-reverse md:flex-row my-6">
      <FooterLinks />
      <FooterSignUp />
    </div>
  );
}
