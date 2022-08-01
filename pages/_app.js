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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Lato&display=swap"
          rel="stylesheet"
        />
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
