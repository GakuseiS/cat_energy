import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainPage from '../pages/mainPage';
import Catalog from '../pages/catalog';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        {/* <MainPage /> */}
        <Switch>
          <Route path='/catalog' component={Catalog} />
          <Route path='/' component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
