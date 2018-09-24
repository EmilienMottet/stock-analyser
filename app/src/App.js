import React, { Component } from 'react';
import request from 'axios';
import { CryptoList, Prices } from "components";
import { Page } from 'StyledComponents';
import './App.css';

class App extends Component {
  state = {
    cryptoList: [],
    selectedCrypto: null,
    prices: null,
  };

  componentDidMount() {
    request.get('http://localhost:5000/coinlist').then(({ data }) => {
      this.setState({ cryptoList: data });
    });
  }

  onCryptoSelect = crypto => {
    this.setState({ selectedCrypto: crypto });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto Analyser</h1>
        </header>
        <Page>
          <CryptoList data={this.state.cryptoList} onCryptoSelect={this.onCryptoSelect} />
          <Prices crypto={this.state.selectedCrypto} />
        </Page>
      </div>
    );
  }
}

export default App;
