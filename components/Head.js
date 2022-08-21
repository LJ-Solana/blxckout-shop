import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>The Stax Store</title>
      <meta name="title" content="Blxckout - The Stax Store" />
      <meta name="description" content="Buy items with STAX using solana pay!" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://buildspace.so/" />
      <meta property="twitter:title" content="Blxckout - The Stax Store" />
      <meta property="twitter:description" content="Buy items with STAX using solana pay!" />
      </Head>
  );
}
