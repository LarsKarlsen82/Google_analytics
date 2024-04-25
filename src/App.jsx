// App.jsx
import AppRouter from "./Components/AppRouter/AppRouter";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from './Components/Footer/Footer';
import CookieConsent from './Components/Cookie/Cookie'; 
import "./App.css";

const App = () => {
  return (
    <div>
    <CookieConsent />
      <AppRouter>
        <NavBar />
      </AppRouter>
      <Footer />
    </div>
  );
};

export default App;
