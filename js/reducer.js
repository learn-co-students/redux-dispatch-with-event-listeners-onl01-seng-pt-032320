// add code snippets from README
//let state = {count: 0}
 
//setting initial state in the reducer, so commented out let state
// need to decalre state tho so...
let state;

function reducer(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

//dispatch- reassigns state,then we want to call render to render html to page
function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

  dispatch({type: '@@INIT'})

let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})