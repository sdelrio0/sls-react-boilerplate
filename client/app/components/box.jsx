import React, { Component } from 'react';

export default class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div className="box">
        {this.props.term}
      </div>
    );
  }
}