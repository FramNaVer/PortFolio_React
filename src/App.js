//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About/>
        <Skills/>
      </main>
    </>

  );
}

export default App;

