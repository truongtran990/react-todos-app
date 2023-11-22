import { createStore } from "redux";

/**
 * This is a reducer - a function that takes a current state value and an action object describing `what happended`, and returns a new state value.
 * A reducers function signature is: (state, action) => newState
 * 
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object. It's important that you should not mutate the state object, but return a new object if the state changes.
 * 
 * You can use any conditional logic you want in a reducer. In this example, we use a switch statement, but it's not required.
 * @param {object} state the current state object that to be updated
 * @param {string} action object describing `what happened`
 * @returns udpated state object based on the action
 */
const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state;
  }
}