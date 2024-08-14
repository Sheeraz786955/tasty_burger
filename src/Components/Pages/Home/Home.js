import React from "react";
import Layout from "../../Layoutes/Layout";
import Hero from "../../Sections/Hero";
import BookTable from "../../Sections/BookTable";
import AboutSection from "../../Sections/AboutSection";
import Keyfeature from "../../Sections/Keyfeature";
import Menu from "../../Sections/Menu";

function Home() {
  return (
    <>
      <Layout>
      <Hero/>
      <BookTable/>
      <AboutSection/>
      <Keyfeature/>
      <Menu/>
      </Layout>
    </>
  );
}

export default Home;
