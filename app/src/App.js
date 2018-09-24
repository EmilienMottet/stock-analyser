import React, { Component } from 'react';
import request from 'axios';
import { TickerList, Price } from "components";
import { Page } from 'StyledComponents';
import './App.css';

class App extends Component {
  state = {
    tickers: [],
    ticker: null,
  };

  componentDidMount() {
    request.get('http://localhost:5000/tickers').then(({ data }) => {
      this.setState({ tickers: data });
    });
  }

  onSelect = ticker => {
    this.setState({ ticker: ticker });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto Analyser</h1>
        </header>
        <Page>
          <TickerList data={this.state.tickers} onSelect={this.onSelect} />
          <Price ticker={this.state.ticker} />
        </Page>
      </div>
    );
  }
}

export default App;
