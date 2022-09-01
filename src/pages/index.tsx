import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import { ApplicationContext } from "../context/application-provider";
import About from "../layouts/about";
import Contact from "../layouts/contact";
import Footer from "../layouts/footer";
import Projects from "../layouts/projects";
import Welcome from "../layouts/welcome";

const Home: NextPage = () => {
  const { selectedSection } = useContext(ApplicationContext);

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
        <>
          {(() => {
            switch (selectedSection) {
              case "welcome":
                return <Welcome />;
              case "about":
                return <About />;
              case "project":
                return <Projects />;
              case "contact":
                return <Contact />;
              default:
                return <Welcome />;
            }
          })()}
        </>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
