import { useState } from "react";
import { ProductCard } from "@/components/index";
import { HeroCard } from "@/components/index";
import { FeatureCard } from "@/components/index";

import products from "products";
import { render } from "react-dom";

import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Home() {
  const [disabled, setDisabled] = useState(false);

  const productsMap = products.map((product, i) => {
    if (i === 0 || i === 9) {
      return (
        <HeroCard
          key={product.id}
          disabled={disabled}
          onClickAdd={() => setDisabled(true)}
          onAddEnded={() => setDisabled(false)}
          {...product}
        />
      );
    } else if (i === 1 || i === 2) {
      return (
        <FeatureCard
          key={product.id}
          disabled={disabled}
          onClickAdd={() => setDisabled(true)}
          onAddEnded={() => setDisabled(false)}
          {...product}
        />
      );
    } else {
      return (
        <ProductCard
          key={product.id}
          disabled={disabled}
          onClickAdd={() => setDisabled(true)}
          onAddEnded={() => setDisabled(false)}
          {...product}
        />
      );
    }
  });

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsMap}
      </div>
    </div>
  );
}
