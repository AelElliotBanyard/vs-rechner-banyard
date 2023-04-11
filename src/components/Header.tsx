import Head from "next/head";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <Head>
        <title>Hausratversicherung Rechner</title>
        <meta name="description" content="banyard.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
    </>
  );
};

export default Header;
