import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";
import introImg from "../../assets/images/home/camion.png";
import "./Home.css";

const transparent = "#00000000";
const mainColor = "#2D3B97";

export class HomePage extends Component {
  state = {
    navbarColor: transparent
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      if (this.state.navbarColor !== mainColor) {
        this.setState({
          navbarColor: mainColor
        });
      }
    } else {
      if (this.state.navbarColor !== transparent) {
        this.setState({
          navbarColor: transparent
        });
      }
    }
  };


  render() {
    return (
      <Layout navbarColor={this.state.navbarColor} mainMargin={0}>
        <div className="home">
          <img src={introImg} className="img-fluid" alt="autotransporte"></img>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>
          <p>Landing page</p>

        </div>
      </Layout >
    );
  }
}

export default HomePage;
