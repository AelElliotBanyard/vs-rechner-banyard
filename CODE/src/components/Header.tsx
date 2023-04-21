import Head from "next/head";
import Navigation from "./Navigation";
import content from "../assets/text.json";
import { useRouter } from "next/router";

const Header = () => {
  const { locale } = useRouter();
  let text = content.header.filter((p) => p.locale === locale)[0];
  return (
    <>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content="banyard.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" type="image/png" />
      </Head>
      <Navigation />
    </>
  );
};

export default Header;
