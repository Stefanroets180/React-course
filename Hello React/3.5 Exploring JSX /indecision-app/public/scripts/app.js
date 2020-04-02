'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML code. This syntax/code is not understood by browsers.
var template = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      { id: 'someid' },
      'Indecision App'
   ),
   React.createElement(
      'p',
      null,
      'This is a some info'
   ),
   React.createElement(
      'ol',
      null,
      React.createElement(
         'li',
         null,
         'Item One'
      ),
      React.createElement(
         'li',
         null,
         'Item Two'
      )
   )
);

var templateTwo = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      'Stefan Roets'
   ),
   React.createElement(
      'p',
      null,
      'Age: 33 '
   ),
   React.createElement(
      'p',
      null,
      'Location: Vanderbijlpark'
   )
);

// Create a templateTwo variable and assign it to a JSX expression.
// The JSX elements to create: 
// root div, 
// h1 -> text of a name exp. Stefan Roets
// p -> Age: followed by a number/ages exp. 33
// p -> Location: followed by a location exp Vanderbijlpark
// Render templateTwo instead of template 

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
