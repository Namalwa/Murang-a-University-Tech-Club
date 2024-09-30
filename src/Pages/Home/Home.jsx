import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Title from "../../Components/Title/Title";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Title text="TESTIMONIALS" />
      <Testimonials />
    </>
  );
}

export default Home;
