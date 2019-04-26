import React, { Component } from 'react';

//componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from './data/menu.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header title="Gold3n" title1="Darkness" items={items} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
