import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css';
import Navbar from './components/Navbar';
import CardButton from './components/Card/CardButton'
import FooterDiv from './components/Card/FooterDiv'
import MiddleDiv from './components/Card/MiddleDiv'
import CardBody from './components/Card/CardBody'
import MainWrapper from './components/MainWrapper/MainWrapper'




const App = () => (
  <section id="app">
    <Navbar />
    <MainWrapper>
      <CardBody>
        <MiddleDiv></MiddleDiv>
        <FooterDiv>
          <CardButton text='Adopt' />
        </FooterDiv>
      </CardBody>
    </MainWrapper>
  </section>
)

export default App;
