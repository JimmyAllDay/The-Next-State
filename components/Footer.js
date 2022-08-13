import Header from "@/components/Header";
import FooterServices from "@/components/FooterServices";
import FooterDetails from "@/components/FooterLinks";
import FooterSocials from "@/components/FooterSocials";
import AllDayLogo from "@/components/AllDayLogo";
import FooterLinks from "@/components/FooterLinks";
import FooterSignUp from "@/components/FooterSignUp";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 bg-black text-nav gap-12">
      <div className="col-span-2">
        <Header mainNav={false} />
      </div>
      <div className="col-span-2">
        <FooterServices />
      </div>
      <div className="col-span-2 md:col-span-1">
        <FooterLinks />
      </div>
      <div className="col-span-2 md:col-span-1">
        <FooterSignUp />
      </div>
      <div className="col-span-2 md:col-span-1">
        <FooterSocials />
      </div>
      <div className="col-span-2">
        <AllDayLogo />
      </div>
    </footer>
  );
}
