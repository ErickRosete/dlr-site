import React, { Component } from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";
import HomePage from "./pages/Home/Home";
import JobsPage from "./pages/Jobs/Jobs";
import QuotationPage from "./pages/Quotation/Quotation";
import BlogPage from "./pages/Blog/Blog";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faHome,
  faChevronLeft,
  faMapMarkerAlt,
  faSearch,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleDown,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./App.css";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
});

class App extends Component {
  render() {

    library.add([
      faFacebook,
      faLinkedin,
      faSearch,
      faPhone,
      faEnvelope,
      faHome,
      faWindowClose,
      faChevronLeft,
      faMapMarkerAlt,
      faChevronCircleLeft,
      faChevronCircleRight,
      faChevronCircleDown,
      faWhatsapp
    ]);

    return (
      <BrowserRouter>
        <ScrollToTop>
          <ApolloProvider client={client}>
            <Switch>
              <Route path="/inicio" component={HomePage} />
              <Route path="/bolsa-trabajo" component={JobsPage} />
              <Route path="/cotiza" component={QuotationPage} />
              <Route path="/blog" component={BlogPage} />
              <Redirect to="/inicio" />
            </Switch>
          </ApolloProvider>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
