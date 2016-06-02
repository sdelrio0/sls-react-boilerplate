import React    from 'react';
import ReactDOM from 'react-dom';


import App      from './components/app';

var container = document.createElement('div');

// Create main container
container.className = 'container';
document.body.appendChild(container);

// React Performance utilities
//if(process.env.NODE_ENV !== 'production') {
//  React.Perf = require('react-addons-perf');
//}

ReactDOM.render(<App />, container);