import React from 'react';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import LandView from './Components/Landview/LandView';
import Nav from './Components/Nav/Nav';
import Offer from './Components/Offer/Offer';

function App() {
  return (
    <>
      <Nav></Nav>
      <main>
        <LandView></LandView>
        <About></About>
        <Offer></Offer>
      </main>
      <Footer></Footer>
    </>
  );
}
export default App;