import React, { Component } from 'react';
import Box                  from './box'
import Input                from './input'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term1: '',
      term2: ''
    };
  }

  setBoxText1(term) {
    this.setState({term1: term});
  }

  setBoxText2(term) {
    this.setState({term2: term});
  }

  render() {
    return (
      <div>
        <Box term={this.state.term1} />
        <Box term={this.state.term2} />
        <Input label="Text for box 1: " onInputTermChange={ term => {this.setBoxText1(term)} } />
        <Input label="Text for box 2: " onInputTermChange={ term => {this.setBoxText2(term)} } />
      </div>
    );
  }
}