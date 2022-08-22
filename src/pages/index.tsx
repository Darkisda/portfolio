import type { NextPage } from "next";
import Head from "next/head";
import About from "../layouts/about";
import Contact from "../layouts/contact";
import Footer from "../layouts/footer";
import Projects from "../layouts/projects";
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
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
