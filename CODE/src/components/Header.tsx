import Head from "next/head";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <Head>
        <title>Hausratversicherung Rechner</title>
        <meta name="description" content="banyard.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" type="image/png" />
      </Head>
      <Navigation />
    </>
  );
};

export default Header;
