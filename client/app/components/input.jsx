import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onInputTermChange(term);
  }

  render() {
    return (
      <div className='inp'>
        {this.props.label}
        <input
          value = {this.state.term}
          onChange = { event => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }
}