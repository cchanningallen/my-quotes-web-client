import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import QuotesIndex from './QuotesIndex';
import { getQuotes, addQuote, deleteQuote, updateQuote } from 'lib/redux/quotes';

class QuotesIndexContainer extends PureComponent {
  static propTypes = {
    quotes: PropTypes.instanceOf(List).isRequired
  };

  render(){
    const { quotes } = this.props;
    console.log({quotes})

    return <QuotesIndex {...{quotes}} />
  }
}

const mapState = (state) => ({
  quotes: getQuotes(state)
});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(QuotesIndexContainer);
