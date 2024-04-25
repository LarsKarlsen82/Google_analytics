// App.jsx
import AppRouter from "./Components/AppRouter/AppRouter";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from './Components/Footer/Footer';
import { CookieBanner } from "./Components/CookieBanner/CookieBanner";
import "./App.css";

const App = () => {
  return (
    <div>
    <CookieBanner />
      <AppRouter>
        <NavBar />
      </AppRouter>
      <Footer />
    </div>
  );
};

export default App;
