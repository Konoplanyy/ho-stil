import React from "react";
import Info from "../header/header_top/info";
import Menu from "../header/header_bottom/menu";
import Footer from "../../elements/footer";


function Layout(props) {
  return (
    <>
      <Info/>
        <Menu/>
        {props.children}
        <Footer/>
    </>
  );
}

export default Layout;
