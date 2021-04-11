import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainPage from '../pages/mainPage';
import CatalogPage from '../pages/catalogPage';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        {/* <MainPage /> */}
        <Switch>
          <Route path='/catalog' component={CatalogPage} />
          <Route path='/' component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
