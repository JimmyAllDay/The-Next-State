import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useShoppingCart } from "@/hooks/use-shopping-cart";
import { formatCurrency } from "@/lib/utils";

export default function FeatureCard(props) {
  const { cartCount, addItem } = useShoppingCart();
  const [adding, setAdding] = useState(false);

  const toastId = useRef();
  const firstRun = useRef(true);

  const handleOnAddToCart = (event) => {
    event.preventDefault();

    setAdding(true);
    toastId.current = toast.loading("Adding 1 item...");

    if (typeof props.onClickAdd === "function") {
      props.onClickAdd();
    }

    addItem(props);
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (adding) {
      setAdding(false);
      toast.success(`${props.name} added`, {
        id: toastId.current,
      });
    }

    if (typeof props.onAddEnded === "function") {
      props.onAddEnded();
    }
  }, [cartCount]);

  return (
    <Link href={`/products/${props.id}`}>
      <a className="col-span-2 relative">
        {/* Product's image */}
        <div className="relative min-w-[50vw] min-h-[100vh] bg-black">
          <Image
            src={props.images[0]}
            alt={props.name}
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </div>

        {/* Name */}
        <div className="font-semibold text-lg absolute m-auto left-0 right-0 top-0 bottom-0 flex">
          <h1 className="text-6xl text-white mx-auto mt-auto mb-40">
            {props.brand}
          </h1>
        </div>
      </a>
    </Link>
  );
}
