import Link from "next/link";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/index";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { HeaderLinks } from "@/components/index";
import { ShoppingCart } from "@/components/index";
import { HeaderComps } from "@/components/index";

const Header = ({ fontColor, bgColor }) => {
  const { totalPrice, cartCount } = useShoppingCart();

  const navLinks = [
    { name: "Womens", href: "/womens" },
    { name: "Mens", href: "/mens" },
    { name: "Brands", href: "/brands" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <header className={`sticky top-0 ${bgColor} z-10 border`}>
      <div className="container xl:max-w-screen-2xl mx-auto p-3 flex justify-between">
        <HeaderLinks navLinks={navLinks} fontColor={fontColor} />
        <Logo fontColor={fontColor} />
        <HeaderComps fontColor={fontColor} />
      </div>
    </header>
  );
};

export default Header;
