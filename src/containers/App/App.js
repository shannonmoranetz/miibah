import React, { Component } from 'react';
import CardCarousel from '../../components/CardCarousel/CardCarousel.js';
import Header from '../../components/Header/Header.js';
import Menu from '../../containers/Menu/Menu.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount = () => {
    this.getAmiibos();
  }

  getAmiibos = () => {
    
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <CardCarousel />
      </div>
    ); 
  }
}

export default App;