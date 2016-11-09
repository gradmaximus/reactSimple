import React, { Component } from 'react';
import Subheader from './Subheader';

class Header extends Component {
  render() {
    return (
      <div>
        <p>Here is the header prop: {this.props.headerprop}</p>
        <Subheader onClick={this.props.onClick} />
      </div>
      );
  }
}

export default Header;
