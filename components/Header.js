import Link from "next/link";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/index";
import { HeaderLinks } from "@/components/index";
import { ShoppingCart } from "@/components/index";
import { HeaderComps } from "@/components/index";
import { Menu } from "@/components/index";
import { SearchBar } from "@/components/index";

const Header = ({ mainNav }) => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (
    <header
      className={` top-0 z-10 w-full mx-auto p-3 flex ${
        mainNav ? "bg-white" : "bg-black relative"
      }`}
    >
      <div className="flex w-full px-4">
        <div className="md:hidden w-1/6 flex my-auto">
          {mainNav && <Menu mainNav={mainNav} />}
        </div>
        <div className="hidden md:inline-flex w-1/3 ">
          <HeaderLinks mainNav={mainNav} />
        </div>
        <div className="flex w-4/6 md:w-1/3 justify-center flex-shrink-0">
          <Logo mainNav={mainNav} />
        </div>
        <div className="flex w-1/6 md:w-1/3 justify-between">
          <div className="w-3/4 py-1 hidden md:flex">
            <SearchBar mainNav={mainNav} />
          </div>
          <div className="flex my-auto ml-auto">
            <ShoppingCart mainNav={mainNav} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
