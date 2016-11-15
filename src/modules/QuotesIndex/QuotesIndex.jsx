import './QuotesIndex.scss';

import React, { PureComponent, PropTypes } from 'react';
import { List } from 'immutable';
import Markdown from 'react-markdown';

import cxHelpers from 'lib/decorators/classNameHelpers';

@cxHelpers("QuotesIndex")
class QuotesIndex extends PureComponent {
  static propTypes = {
    quotes: PropTypes.instanceOf(List).isRequired
  };

  render(){
    const { quotes } = this.props;

    return(
      <div className={this.cx()}>
        {
          quotes && quotes.map(({ content, author }) => (
            <div className={this.cxEl('row')}>
              <div className={this.cxEl('content')}>
                <Markdown source={content} />
              </div>

              <div className={this.cxEl('author')}>
                <Markdown source={author} />
              </div>

              <div className={this.cxEl('actions')}>x</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default QuotesIndex;
