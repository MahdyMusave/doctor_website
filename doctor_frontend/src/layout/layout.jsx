import React from "react";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";
import Routers from "../routes/routers";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
