import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Red from './components/redblock.js';
import Blue from './components/blueblock.js';
import Yellow from './components/yellowblock.js';

let Display = ()=> {
  return (
    <div className="Display">
     <Yellow/>
     <Red/>
     <Blue/>
    </div>
  );
}
ReactDOM.render(
    <Display />,document.getElementById('root')
);