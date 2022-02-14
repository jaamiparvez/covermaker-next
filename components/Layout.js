import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>CoverMaker</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans:ital,wght@0,700;1,400&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      {children}
    </div>
  );
}

export default Layout;
