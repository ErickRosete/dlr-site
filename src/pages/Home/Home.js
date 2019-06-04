import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";
import "./Home.css";
import CertificationCard from "../../components/Home/CertificationCard";

import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import customerLogo from "../../assets/images/home/astra-blanco.png";

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
          <section className="intro-video">
            <div className='player-wrapper'>
              <ReactPlayer className="react-player"
                url='https://www.youtube.com/watch?v=6C0fVCahkhQ'
                playing loop muted controls={false}
                width='100%' height='100%'
                config={{
                  youtube: {
                    playerVars: { showinfo: 0 }
                  }
                }} />
            </div>
          </section>

          <section className="about">
            <div className="about-info">
              <h2 className="subtitle">Nuestra empresa está <span className="text-red">100%</span> dedicada al transporte y logística</h2>
              <p>Legalmente establecida en México bajo las leyes y reglamentos de la SCT. Somos una compañía certificada por la norma C-TPAT. Somos una empresa extremadamente eficiente e innovadora que estamos en constante crecimiento y desarrollo con más de 10 años de experiencia en el sector.</p>
            </div>
          </section>

          <section className="map">
            <h2 className="subtitle">Facilidad y seguridad en los traslados en México y a USA</h2>
          </section>

          <section className="quotation">
            <div className="quotation-info">
              <h2 className="subtitle">Acércate a nosotros</h2>
              <Link to="/cotiza">
                <button className="btn btn-sec btn-big">Cotiza ahora</button>
              </Link>
            </div>
          </section>

          <section className="certification">
            <div className="certification-info">
              <h2 className="subtitle">Certificaciones</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat enim dui, eget convallis nisi efiicitur vel. Nullam placerat enim dui, eget convallis nisi efficitur vel.</p>
            </div>
            <div className="certification-list">
              <CertificationCard />
              <CertificationCard />
              <CertificationCard />
            </div>
          </section>

          <section className="customers">
            <h2 className="subtitle">Clientes satisfechos</h2>
            <div className="customer-list">
              <div className="customer-card">
                <img src={customerLogo} alt="customer"></img>
              </div>
              <div className="customer-card">
                <img src={customerLogo} alt="customer"></img>
              </div>
              <div className="customer-card">
                <img src={customerLogo} alt="customer"></img>
              </div>
            </div>
          </section>
        </div>
      </Layout >
    );
  }
}

export default HomePage;
