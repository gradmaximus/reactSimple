import React, { Component } from 'react';

class Subheader extends Component {
  render() {
    return (
      <div>
        <p onClick={ () => this.props.onClick('yep') }>Click me from level 2</p>
      </div>
      );
  }
}

export default Subheader;
