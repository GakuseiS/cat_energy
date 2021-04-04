import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainPage from '../pages/mainPage';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App;
