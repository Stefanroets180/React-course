console.log('App.js is running!');

// JSX - JavaScript XML code. This syntax/code is not understood by browsers.
// var template = <p>This is JSX from app.js</p>;



var template = React.createElement(
   "h1",
   { id: "someid" },
   "Say Something"
);


var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);