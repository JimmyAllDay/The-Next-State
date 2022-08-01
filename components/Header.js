import Link from "next/link";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/index";
import { HeaderLinks } from "@/components/index";
import { ShoppingCart } from "@/components/index";
import { HeaderComps } from "@/components/index";
import { Menu } from "@/components/index";

const Header = ({ mainNav }) => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (
    <header
      className={`sticky top-0 z-10 container xl:max-w-screen-xl mx-auto p-3 flex justify-between ${
        mainNav ? "bg-white" : "bg-black"
      }`}
    >
      {mainNav && <Menu />}
      <HeaderLinks mainNav={mainNav} />
      <Logo mainNav={mainNav} />
      <HeaderComps mainNav={mainNav} />
    </header>
  );
};

export default Header;
