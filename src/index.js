import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const valueData = {
	"values": [
		"Good for younger children",
    "Needs place for sitting",
    "More flowers and trees",
    "Needs cafe",
    "Wild flowers",
    "Needs lake / water feature",
    "Relaxing",
    "A place for all ages",
    "Inviting"
  ]
}

ReactDOM.render(<App valueData={valueData}/>, document.getElementById('root'));
registerServiceWorker();