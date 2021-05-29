const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementAction = () => ({
  type: INCREMENT,
});

const decrementAction = () => ({
  type: DECREMENT,
});

const countReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const incrementCounter = () => {
  store.dispatch(incrementAction());
}

const decrementCounter = () => {
  store.dispatch(decrementAction());
}

const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counter = document.querySelector('#value');

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);

store.subscribe(() => {
  counter.innerText = store.getState();
});
