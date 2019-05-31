import React from 'react'
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer"
import "./Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navigation backgroundColor={props.navbarColor} secondary={props.secondaryNavbar} />
      <main className="main-content" style={{ margin: props.mainMargin }}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
