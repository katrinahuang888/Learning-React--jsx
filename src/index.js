// 1) Import the React and ReactDOM libraries
import React from 'react';
/* React: library that defines what a component is
and how multiple components work together */
import ReactDOM from 'react-dom/client';
/* ReactDOM: library that knows how to get a component
to show up in the browser */
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

/* 3) Tell React to take control of that element
We want to show our application inside of that element */
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);