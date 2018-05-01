import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bar from './Bar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bar />, document.getElementById('root'));
registerServiceWorker();
