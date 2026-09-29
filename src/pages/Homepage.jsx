import React from 'react';
import { useReducer } from 'react';
function Homepage() {
  const initialState = { count: 0 };

  const countReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return { count: state.count + 1 };
    } else if (action.type === 'DECREMENT') {
      return { count: state.count - 1 };
    }

    return state;
  };

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Homepage;
