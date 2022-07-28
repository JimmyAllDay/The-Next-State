import Link from "next/link";
import { Icon } from "@iconify/react";
// import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";

export default function ShoppingCart({ fontColor }) {
  const { totalPrice, cartCount } = useShoppingCart();
  return (
    <div className="flex">
      <Link href="/cart">
        <a
          className={`flex items-center space-x-1 ${fontColor} hover:text-gray-400`}
        >
          <Icon icon="bi:bag" className="text-3xl" />

          <p className="text-lg">
            {/* {formatCurrency(totalPrice)}{" "}
            <span className={`text-sm ${fontColor}`}>({cartCount})</span> */}
          </p>
        </a>
      </Link>
    </div>
  );
}
