import * as React from 'react';
import { Filter, List, ListItem } from 'StyledComponents';

export default class TickerList extends React.PureComponent {
  state = {
    filter: '',
  };

  render() {
    return (
      <List>
        <Filter placeholder='Cherchez une crypto...'
                onChange={(e) => this.setState({ filter: e.target.value.toLowerCase() })} />
        {this.props.data
          .filter(ticker => ticker.name.toLowerCase().includes(this.state.filter))
          .map(ticker => (
            <ListItem key={ticker.ticker} onClick={() => this.props.onSelect(ticker.ticker)}>
              <p>
                {ticker.name}
              </p>
            </ListItem>))}
      </List>
    );
  }
}