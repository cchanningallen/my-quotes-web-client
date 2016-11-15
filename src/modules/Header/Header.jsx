import './Header.scss';

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import cxHelpers from 'lib/decorators/classNameHelpers';
import QuotesLabel from 'components/QuotesLabel';
import AccountBox from 'components/AccountBox';

@cxHelpers("Header")
class Header extends PureComponent {
  static propTypes = {

  };

  render(){
    const {  } = this.props;

    return(
      <div className={this.cx()}>
        <Link to="/quotes" className={this.cxEl('quotes-link')}>
          <QuotesLabel />
        </Link>

        <AccountBox
          className={this.cxEl('account-box')}
          username="Channing" />
      </div>
    );
  }
}

const mapState = (state) => ({

});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Header);
