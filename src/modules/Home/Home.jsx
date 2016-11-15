import './Home.scss';

import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import Markdown from 'react-markdown';

import cxHelpers from 'lib/decorators/classNameHelpers';
import Icon from 'components/Icon';

@cxHelpers("Home")
class Home extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string
  };

  render(){
    const { quote, author } = this.props;

    return(
      <div className={this.cx()}>
        <div className={this.cxEl('quote')}>
          <div className={this.cxEl('quote-actions')}>
            <Icon type="highlight-remove" />
          </div>
          <Markdown source={quote} />
        </div>
        <div className={this.cxEl('author')}><em>- {author}</em></div>
      </div>
    );
  }
}

export default Home;
