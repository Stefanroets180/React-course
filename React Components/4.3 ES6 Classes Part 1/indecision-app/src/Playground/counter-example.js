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
