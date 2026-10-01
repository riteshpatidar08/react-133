import React  from "react";
import { useReducer } from "react";

import { ThumbsUp, ThumbsDown } from "lucide-react";

function LikeDislike() {

  const initialState = {
    like: 0,
    dislike: 0
  };

  const reducer = (state, action) => {

    if (action.type === "LIKE") {
      return {
        like: 1,
        dislike: 0
      };
    }

    if (action.type === "DISLIKE") {
      return {
        like: 0,
        dislike: 1
      };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

      <h2>Like: {state.like}</h2>
      <h2>Dislike: {state.dislike}</h2>

      <button onClick={() => dispatch({ type: "LIKE" })}>
        <ThumbsUp />
         Like
      </button>

      <button onClick={() => dispatch({ type: "DISLIKE" })}>
        <ThumbsDown />
         Dislike
      </button>

    </div>
  );
}

export default LikeDislike;