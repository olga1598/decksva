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
            <Route component={NotFoundPage} exact />
          </Switch>
        </section>
        <Footer className="footer" />
      </section>
    </BrowserRouter>
  );
}

export default App;
