import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../layouts/footer";
import Welcome from "../layouts/welcome";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LSN | Portfolio</title>
        <meta
          name="description"
          content="Portifolio Luan de Souza Nascimento"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Welcome />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
