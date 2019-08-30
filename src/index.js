import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Mass} from './pages/main';

ReactDOM.render(<Mass/>, document.getElementById('root'));

serviceWorker.unregister();
