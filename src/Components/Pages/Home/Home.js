import React from "react";
import Layout from "../../Layoutes/Layout";
import Hero from "../../Sections/Hero";
import BookTable from "../../Sections/BookTable";

function Home() {
  return (
    <>
      <Layout>
      <Hero/>
      <BookTable/>
      </Layout>
    </>
  );
}

export default Home;
