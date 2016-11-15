import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { getQuotes } from 'lib/redux/quotes';

import Home from './Home';

class HomeContainer extends PureComponent {
  static propTypes = {

  };

  render(){
    const { quotes } = this.props;
    const { content, author } = quotes.get(Math.floor(Math.random() * quotes.size));

    return <Home quote={content} author={author} />
  }
}

const mapState = (state) => ({
  quotes: getQuotes(state)
});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(HomeContainer);
