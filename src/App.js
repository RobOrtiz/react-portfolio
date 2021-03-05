import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Main from "./components/Main";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Background />
        <Main />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
