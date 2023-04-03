import React from "react";
import Footer from "../components/Footer";
import GoogleMyBusinessReviews from "../components/GoogleMyBusinessReviews";
import FAQ from "../components/FAQ";
import HeroImg from "../components/HeroImg";
import Nav from "../components/Nav";
import Steps from "../components/Steps";

const Home = () => {
  return (
    <div>
      <Nav />
      <HeroImg />
      <Steps />
      <GoogleMyBusinessReviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
