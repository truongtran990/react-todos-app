import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      /* 
      Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because if uses the Immer library,
      which detects changes to a "draft state" and produces a brand new immutable state based of those changes.
      */
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    }
  }
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
});

store.subscribe(() => console.log(store.getState));

// pass action objects to `dispatch`, but they are created forus
store.dispatch(incremented()); // {value: 1}

store.dispatch(incremented()); // {value: 2}

store.dispatch(decremented()); // {value: 1}