import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import Body from './components/Body';
import { useState, createContext, useContext } from "react";
function App() {
  return (
    <>
      <Header />
      <Top />
      <Body />
    </>
  );
}

export default App;
