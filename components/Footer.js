import Header from "@/components/Header";
import FooterServices from "@/components/FooterServices";
import FooterDetails from "@/components/FooterDetails";

const Footer = () => (
  <footer className="w-full bg-black mx-auto flex flex-col text-nav">
    <Header mainNav={false} />
    <FooterServices />
    <FooterDetails />
    <p className="mx-auto">
      <a className="text-gray-300 font-secondary">All Day &copy;</a>
    </p>
  </footer>
);

export default Footer;
