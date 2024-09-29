import "./App.css";
import React from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { MainForm } from "./Components/MainForm";

function App() {
  return (
    <div>
      <Header />
      <MainForm />
      <Footer />
    </div>
  );
}

export { App };
