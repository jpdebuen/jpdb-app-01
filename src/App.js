import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css';
import Navbar from './components/Navbar/NavbarBody/Navbar';
import CardButton from './components/Card/CardButton'
import CardBody from './components/Card/CardBody'
import MainWrapper from './components/MainWrapper/MainWrapper'
import SearchInput from './components/Navbar/SearchInput';

const App = () => (
  <section id="app">
    <Navbar>
      <SearchInput text = "Buscando" />
    </Navbar>
    <MainWrapper>
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-sm-4'>
            <CardBody petName = 'Shanti' petBreed = 'Blue Heeler' img = 'https://upload.wikimedia.org/wikipedia/commons/c/cc/ACD-blue-spud.jpg' >
              <CardButton text = 'Adopt'/>
            </CardBody>
          </div>
          <div className = 'col-sm-4'>
            <CardBody petName = 'Colette' petBreed = 'Havaneese' img = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Ozzy.jpg'>
              <CardButton text = 'Adopt'/>
            </CardBody>
          </div>
          <div className = 'col-sm-4'>
            <CardBody petName = 'Margot' petBreed = 'Cocker Spaniel' img = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Bojars%27s_english_cocker_spaniel.jpg' >
              <CardButton text = 'Adopt'/>
            </CardBody>
          </div>
          <div className = 'col-sm-4'>
            <CardBody petName = 'Margot' petBreed = 'Cocker Spaniel' img = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Bojars%27s_english_cocker_spaniel.jpg' >
              <CardButton text = 'Adopt'/>
            </CardBody>
          </div>
          <div className = 'col-sm-4'>
            <CardBody petName = 'Loki' petBreed = 'German Sheperd' img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Fritzi_GSD_puppy.jpg/1024px-Fritzi_GSD_puppy.jpg' >
              <CardButton text = 'Adopt'/>
            </CardBody>
          </div>
        </div>
      </div>
    </MainWrapper>
  </section>
)

export default App;
