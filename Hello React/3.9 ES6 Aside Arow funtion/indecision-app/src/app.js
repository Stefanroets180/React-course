console.log('App.js is running!!');

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"
const app = {
  title: 'Indecision App',
  subtitle: 'I am using react today',
  options:['one', 'two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
    name: 'Stefan',
    age: 33,
    location: 'Vanderbijlpark'
  };
  function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>;
    }
  }
  const templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  );
  
  const appRoot = document.getElementById('app');
  
  ReactDOM.render(template, appRoot);