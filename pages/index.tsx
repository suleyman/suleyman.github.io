import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Süleyman Danalıoğlu | Front End Developer</title>
        <meta name="description" content="Süleyman Danalıoğlu's personal portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
