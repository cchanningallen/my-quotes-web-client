import './QuotesLabel.scss';

import React, { PureComponent, PropTypes } from 'react';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Icon from 'components/Icon';

@cxHelpers("QuotesLabel")
class QuotesLabel extends PureComponent {
  static propTypes = {

  };

  render(){
    return(
      <div className={this.cx()}>
        MyQuotes
      </div>
    );
  }
}

export default QuotesLabel;
