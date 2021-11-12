//imported file
import React from "react";
import Products from "../../Shared/Products/Products";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";

//home component
const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* <Banner></Banner> */}
      <Products></Products>
      {/* <Blogs></Blogs> */}
      <Reviews></Reviews>
      {/* <Team></Team> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
