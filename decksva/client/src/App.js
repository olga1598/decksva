import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Resurfacing from "./components/Resurfacing/Resurfacing";
import Gazebos from "./components/Gazebos/Gazebos";
import Contacts from './components/Contacts/Contacts';
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
import Process from "./components/Process/Process";
import Warranty from "./components/Warranty/Warranty";
import Company from "./components/Company/Company";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <BrowserRouter>
      <section className="wrapper">
        <Header className="header" />
        <Navbar className="header" />
        <section className="content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/resurfacing" component={Resurfacing} exact />
            <Route path="/gazebos" component={Gazebos} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/reviews" component={Reviews} exact />
            <Route path="/process" component={Process} exact />
            <Route path="/warranty" component={Warranty} exact />
            <Route path="/company" component={Company} exact />
            <Route path="/why-choose-us" component={WhyUs} />
            <Route component={NotFoundPage} exact />
          </Switch>
        </section>
        <Footer className="footer" />
      </section>
    </BrowserRouter>
  );
}

export default App;
