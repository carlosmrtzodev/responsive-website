import {
  Blog,
  Header,
  Footer,
  Features,
  WhatGPT3,
  Container,
  Possibility,
  ContainerHeader,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Container>
        <ContainerHeader>
          <Navbar />
          <Header />
        </ContainerHeader>

        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </Container>
    </>
  );
};

export default App;
