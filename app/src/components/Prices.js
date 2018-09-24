import * as React from 'react';
import request from "axios";

export default class Prices extends React.PureComponent {
  state = {
    data: null,
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.crypto) {
      request.get(`http://localhost:5000/price?fsym=${nextProps.crypto.symbol}&tsyms=USD,EUR`).then(({ data }) => this.setState({ data }));
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>{this.state.data &&
      <div>
        <p>EUR : {this.state.data.EUR}</p>
        <p>USD : {this.state.data.USD}</p>
      </div>
      }</div>
    );
  }
}