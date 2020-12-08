// add code snippets from README
let state

function reducer(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state
  }
}

function dispatch(act) {
  state = reducer(state, act)
  render()
}

function render() {
  let container = document.querySelector('#container')
  container.textContent = state.count
}

dispatch({type: '@@init'})

let button = document.querySelector('#button')

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})