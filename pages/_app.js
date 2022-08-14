import { useState } from "react";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { CartProvider } from "@/hooks/use-shopping-cart";
import {
  Header,
  Footer,
  SignInDrawer,
  ShoppingCartDrawer,
} from "@/components/index";
import Layout from "components";

function MyApp({ Component, pageProps }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleShowSignIn = () => {
    setShowSignIn(true);
    console.log(showSignIn);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  const toggleShowCart = () => {
    setShowCart(true);
    console.log(showSignIn);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Head>
        <title>The Next State</title>
        <meta name="description" content="The Next State ecommerce store" />
      </Head>
      <CartProvider>
        <div className="flex flex-col p-0">
          <Header
            mainNav={true}
            toggleShowSignIn={toggleShowSignIn}
            toggleShowCart={toggleShowCart}
            closeSignIn={closeSignIn}
            closeCart={closeCart}
          />
          <main className="flex-grow">
            {showSignIn && <SignInDrawer closeSignIn={closeSignIn} />}
            {showCart && <ShoppingCartDrawer closeCart={closeCart} />}
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default MyApp;
