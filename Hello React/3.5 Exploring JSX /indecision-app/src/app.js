console.log('App.js is running!');

// JSX - JavaScript XML code. This syntax/code is not understood by browsers.
var template = ( 
    <div>
       <h1 id="someid">Indecision App</h1>
       <p>This is a some info</p>
       <ol>
          <li>Item One</li>
          <li>Item Two</li>
       </ol>
    </div>
 );

var templateTwo =  (
    <div>
        <h1>Stefan Roets</h1>
        <p>Age: 33 </p>
        <p>Location: Vanderbijlpark</p>
    </div>
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