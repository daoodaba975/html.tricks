import Head from "next/head";

function Header() {
  return (
    <Head>
      <title>HTML Tricks</title>
      <meta property="og:title" content="HTML Tricks" key="title" />
      <meta
        name="description"
        content="⚡ Some cool HTML tricks that many developers ignore."
      />
    </Head>
  );
}

export default Header;
