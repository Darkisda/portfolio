import Head from "next/head";
import BackButton from "../components/back-button";
import FixedAbout from "../layouts/fixed-about";
import Footer from "../layouts/footer";
import ScrollingAbout from "../layouts/scrolling-about";

export default function About() {
  return (
    <>
      <Head>
        <title>LSN | Sobre</title>
      </Head>
      <main>
        <div className="w-full h-screen overflow-auto bg-blackvariant">
          <BackButton />
          <section
            id="sobre"
            className="container p-3 py-14 lg:max-w-5xl h-full animate-pageanimation flex flex-col lg:flex-row items-start mx-auto"
          >
            <div className="lg:w-1/2 w-full h-full relative">
              <FixedAbout />
            </div>
            <div className="lg:w-1/2 pb-10">
              <ScrollingAbout />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
