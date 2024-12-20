//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
      </main>
    </>

  );
}

export default App;

