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

let count = 0;
const addOne = () => {
    count++;
    rendercountApp();
};
const minusOne = () => {
    count--;
  rendercountApp();
};
const reset = () => {
    count = 0;
    rendercountApp();
   
};

  
//challeng
// make button "-1" setup minusOne function and register - log "minusOne"
// make rest butt "reset" - setup reset funtion - log "reset"
  
const appRoot = document.getElementById('app');
  
 

const rendercountApp = () => {
    const templateTwo = (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={addOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          <button onClick={reset}>reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);
};

rendercountApp();
