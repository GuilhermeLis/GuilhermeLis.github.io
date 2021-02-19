import Head from "next/head";

// import MenuBar from "@/components/MenuBar";
import NavBar from "@/components/NavBar";
import Carroceu from "@/components/Carroceu";

import { Container, FirstSection } from "#/styles/Home";

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>GL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstSection>
        <NavBar />
        <Carroceu />
      </FirstSection>
    </Container>
  );
};

export default Home;
