import React from "react";
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
    </div>
  );
}

export default App;
