import * as React from 'react';
import request from "axios";

export default class Price extends React.PureComponent {
  state = {
    price: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.ticker) {
      request.get(`http://localhost:5000/price/${nextProps.ticker}`).then(({ data }) => this.setState({ price: data.value }));
    }
  }

  render() {
    return (
      <div>{this.state.price &&
      <div>
        <p>USD : {this.state.price}</p>
      </div>
      }</div>
    );
  }
}