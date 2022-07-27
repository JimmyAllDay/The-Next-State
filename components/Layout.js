import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { closeElement } from "react";
import { useRouter } from "next/router";

import { useState } from "react";

const name = "James Marshall";
export const siteTitle = "James Marshall Dev";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const path = router.pathname;

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dev portfolio and resume for James Marshall"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>{}</header>
      <main>{children}</main>
    </div>
  );
}
