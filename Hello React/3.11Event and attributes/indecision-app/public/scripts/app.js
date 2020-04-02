'use strict';

console.log('App.js is running!!');

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"
var app = {
  title: 'Indecision App',
  subtitle: 'I am using react today',
  options: ['one', 'two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};
var minusOne = function minusOne() {
  console.log('minusOne');
};
var reset = function reset() {
  console.log('reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

//challeng
// make button "-1" setup minusOne function and register - log "minusOne"
// make rest butt "reset" - setup reset funtion - log "reset"

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
