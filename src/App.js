import React from "react";
import logo from './logo.svg';
import AppHeader from "./components/sections/MainHeader/MainHeader";
import TicketAside from "./components/sections/TicketAside/TicketsAside";
import AppContent from "./components/sections/AppContent/AppContent";
import './App.scss';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppContent />
      <TicketAside />
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
