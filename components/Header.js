import Link from "next/link";
import { useState } from "react";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/index";
import { HeaderLinks } from "@/components/index";
import { ShoppingCart } from "@/components/index";
import { HeaderComps } from "@/components/index";
import { Menu } from "@/components/index";
import { SearchBar } from "@/components/index";
import { SignInButton } from "@/components/index";

const Header = ({
  mainNav,
  showSignIn,
  toggleShowSignIn,
  closeSignIn,
  toggleShowCart,
  closeCart,
}) => {
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
        <div className="flex justify-end space-x-6 w-1/6 md:w-1/3">
          <div className="py-1 hidden md:flex">
            <SearchBar
              mainNav={mainNav}
              closeSignIn={closeSignIn}
              closeCart={closeCart}
            />
          </div>
          <div className="hidden md:flex my-auto">
            <SignInButton
              mainNav={mainNav}
              showSignIn={showSignIn}
              toggleShowSignIn={toggleShowSignIn}
              closeCart={closeCart}
            />
          </div>
          <div className="flex my-auto">
            <ShoppingCart
              mainNav={mainNav}
              closeSignIn={closeSignIn}
              closeCart={closeCart}
              toggleShowCart={toggleShowCart}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
