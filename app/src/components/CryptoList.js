import * as React from 'react';
import { Filter, List, ListItem } from 'StyledComponents';

export default class CryptoList extends React.PureComponent {
  state = {
    filter: '',
  };

  render() {
    return (
      <List>
        <Filter placeholder='Cherchez une cryptocurrency...'
                onChange={(e) => this.setState({ filter: e.target.value.toLowerCase() })} />
        {this.props.data.filter(data => {
          return data.symbol.toLowerCase().includes(this.state.filter) || data.coin_name.toLowerCase().includes(this.state.filter);
        }).map(crypto => (
          <ListItem key={crypto.symbol} onClick={() => this.props.onCryptoSelect(crypto)}>
            <p>
              {crypto.coin_name}
            </p>
          </ListItem>))}
      </List>
    );
  }
}