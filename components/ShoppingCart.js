import Link from "next/link";
import { Icon } from "@iconify/react";
// import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";

export default function ShoppingCart({ mainNav, closeSignIn, toggleShowCart }) {
  const { totalPrice, cartCount } = useShoppingCart();
  return (
    <Link href="/cart">
      <a
        onMouseOver={() => {
          closeSignIn();
          toggleShowCart();
        }}
        className={`flex ${
          mainNav
            ? "text-gray-500 hover:text-gray-800"
            : "text-gray-500 hover:text-gray-200"
        }`}
      >
        <Icon icon="bi:bag" className="text-2xl" />

        {/* <p className="text-lg"> */}
        {/* {formatCurrency(totalPrice)}{" "} */}
        {/* <span className={`text-sm text-gray-500`}>({cartCount})</span> */}
        {/* </p> */}
      </a>
    </Link>
  );
}
