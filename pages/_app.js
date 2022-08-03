import "tailwindcss/tailwind.css";
import Head from "next/head";
import { CartProvider } from "@/hooks/use-shopping-cart";
import { Header, Footer } from "@/components/index";
import Layout from "components";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>The Next State</title>
        <meta name="description" content="The Next State ecommerce store" />
      </Head>
      <CartProvider>
        <div className="flex flex-col p-0">
          <Header mainNav={true} />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default MyApp;
