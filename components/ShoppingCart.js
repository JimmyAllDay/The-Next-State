import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";

export default function ShoppingCart({ fontColor }) {
  const { totalPrice, cartCount } = useShoppingCart();
  return (
    <div className="w-1/4 flex justify-center">
      <Link href="/cart">
        <a
          className={`flex items-center space-x-1 ${fontColor} hover:text-gray-400`}
        >
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-lg">
            {formatCurrency(totalPrice)}{" "}
            <span className={`text-sm ${fontColor}`}>({cartCount})</span>
          </p>
        </a>
      </Link>
    </div>
  );
}
